import useGetProblemStat from "../util/useGetProblemStat.js"
import testcasePrinter from "../util/testcasePrinter.js";

const DisplayProblem = ({ques}) => {
    // testcasePrinter (ques.testcases[0])
    return (
        <div>
            <h2>
                {ques.probId + ". " + ques.probName}
            </h2>
            <p>
                {ques.probStat}
            </p>
            <div>
                <h3>Example</h3>
                <div>
                    {testcasePrinter (ques.testcases[0])}
                </div>
                
            </div>

        </div>
    )
}

export default DisplayProblem;
