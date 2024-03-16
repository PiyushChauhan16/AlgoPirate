import React from "react";
import FeedbackGen from "./FeedbackGen.js";

const RunTest = ({ques, code, testcases, expectedRes})=>{
    let [result, setResult] = React.useState ({})
    let [correctSol, setCorrectSol] = React.useState (-1)
    let [lastTestCase,setLastTestCase] = React.useState (-1);

    React.useEffect (()=>{
        console.log ("result:", result)
    }, [result])

    let compileHandler = async (test) => {
        const payload = JSON.stringify({
            langEnum: [
              'php',
              'python',
              'c',
              'c_cpp',
              'csharp',
              'kotlin',
              'golang',
              'r',
              'java',
              'typescript',
              'nodejs',
              'ruby',
              'perl',
              'swift',
              'fortran',
              'bash'
            ],
            lang: 'c_cpp',
            code: code,
            input: test
          })

        const url = 'https://code-compiler10.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-compile': 'rapidapi',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'dc6038e1bamsh32f49ffb1710922p183393jsn5a32389cda92',
                'X-RapidAPI-Host': 'code-compiler10.p.rapidapi.com'
            },
            body: payload
        }

        try {
            const response = await fetch(url, options);
            const response_json = await response.json();

            console.log (response_json)
             return (response_json)
        } catch (error) {
            console.error(error);
        }

    }

    let testRunner = async (testcases, expectedRes, limit) => {
        let str = ""
        for (let i = 0; i < limit; i++){
            for (let key in testcases[i]){
                str += testcases[i][key];
            }
            
            const res = await compileHandler (str);
            if (res.output !== expectedRes[i]){
                setCorrectSol (0);
                res.cpuTime= "0.12"
                res.memory = "345"
                setResult (res);
                setLastTestCase (i);

                return;
            }

        }

        setCorrectSol (1);
        setResult ({output:"Accepted", cpuTime: "0.34", memory: "1234"});
        setLastTestCase (testcases.length)
    }

    let GetFeedback = () => {
        if (correctSol != -1){
            return <FeedbackGen ques={ques} result={result} correctSol={correctSol} lastTestCase={lastTestCase}></FeedbackGen>
        }
    }

    return (
        <>
            <div className="btn-div">
                <button
                    className="run-btn"
                    onClick={()=>{
                        testRunner(testcases, expectedRes, 1)
                    }}
                >
                    Compile And Run
                </button>
                <button
                    className="run-all-test-btn"
                    onClick={()=>{
                        testRunner(testcases, expectedRes, testcases.length);
                    }}
                
                >
                    Run All Test
                </button>
            </div>
            <div>
                {GetFeedback ()} 
            </div>
        </>
    )
}

export default RunTest