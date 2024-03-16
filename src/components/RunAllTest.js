import React from "react";
import FeedbackGen from "./FeedbackGen.js";
import CustomReport from "./CustomReport.js";

const RunTest = ({correctCode, customInput, code, testcases, expectedRes})=>{
    // let [result, setResult] = React.useState ({})
    let [flag, setFlag] = React.useState (-1)
    // let [lastTestCase,setLastTestCase] = React.useState (-1);

    let [input, setInput] = React.useState ("");
    let [output, setOutput] = React.useState ("");
    let [expectedOutput, setExpectedOutput] = React.useState("");
    let [cpuTime, setCpuTime] = React.useState("");
    let [memory, setMemory] = React.useState("");
    let [correctSol, setCorrectSol] = React.useState(-1);
    
    

    // React.useEffect (()=>{
    //     setFlag (-1);
    // }, [flag])

    let compileHandler = async (test, code) => {
        console.log ("test:", test)
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

        console.log ("payload", payload)

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

            console.log ("response_json",response_json)
             return (response_json)
        } catch (error) {
            console.error(error);
        }

    }

    let testRunner = async () => {
        for (let i = 0; i < testcases.length; i++){
            let str = ""
            for (let key in testcases[i]){
                str += testcases[i][key];
            }
            
            const res = await compileHandler (str, code);
            if (res.output !== expectedRes[i]){
                setCorrectSol (0);
                setCpuTime("0.12")
                setMemory("345")
                setInput(str);
                setOutput (res.output);
                setExpectedOutput (expectedRes[i]);

                console.log ("in testrunner res:", res)
                return;
            }

        }

        setCorrectSol (1);
        setCpuTime("0.12")
        setMemory("345")
        setInput("");
        setOutput ("");
        setExpectedOutput ("");
        
    }

    let customRunner = async () => {
        let buildPostQuery = "";
        for (let i = 0; i < customInput.length; i++){
            buildPostQuery += customInput[i];
        }
        const res = await compileHandler (buildPostQuery, code);
        const correctres = await compileHandler (buildPostQuery, correctCode);
        // setCorrectSol (2);
        // res.cpuTime= "0.12"
        // res.memory = "345"

        // correctres.cpuTime = "0.34"
        // correctres.memory = "123"
        // setResult (res);
        setOutput (res.output);
        setExpectedOutput (correctres.output);

        console.log ("customInput:", JSON.stringify(customInput));
        console.log ("res:", res);
        console.log ("correctres:", correctres);
        return

    }

    async function helper (){
        if (flag === 0){
            await customRunner ();
            console.log ("calling custom Runner")
            return 

        }
        else if (flag === 1){
            await testRunner ()
            if (correctSol == 0){
                return 
            }
            else if (correctSol == 1){
                return 
            }
           
        }
        setFlag (-1);
    }
    console.log ("flag:", flag)
    return (
        <>
            <div className="btn-div">
                <button
                    className="run-btn"
                    onClick={()=>{
                        customRunner ();
                        setFlag (0);
                        
                    }}
                >
                    Custom Run
                </button>
                <button
                    className="run-all-test-btn"
                    onClick={()=>{
                        testRunner ();
                        setFlag (1);
                        
                    }}
                
                >
                    Run All Test
                </button>
            </div>
            <div>
                {(flag === 1 && correctSol === (0)) && <FeedbackGen correctSol={0} input={input} output={output} cpuTime={cpuTime} memory={memory} expectedOutput={expectedOutput} setFlag={setFlag}></FeedbackGen>}
                {(flag === 1 && correctSol === (1)) && <FeedbackGen correctSol={1} cpuTime={cpuTime} memory={memory} setFlag={setFlag}></FeedbackGen>}
                {(flag === 0) &&  <CustomReport input = {customInput} output = {output} expectedOutput={expectedOutput}></CustomReport>} 
                {/* {setCorrectSol (-1)} */}
            </div>
        </>
    )
}

export default RunTest