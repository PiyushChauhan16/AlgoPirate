import React from "react";
import testcasePrinter from "../util/testcasePrinter.js";
import Chatgpt from "./Chatgpt.js";

const ErrorReport = ({ques,lastTestCase, result}) => {
    return (
        <div className="wa-arr">
            <div className = "wa">
                <h2>OOPS! Something went wrong</h2>
                <div>
                    <div>
                        <h3 class = "wa-heading">INPUT</h3>
                        <div>
                            {testcasePrinter(ques.testcases[lastTestCase])}
                        </div>
                    </div>
                    <div>
                        <h3 class = "wa-heading">OUTPUT</h3>
                        <div>
                            {result.output}
                        </div>
                    </div>
                    <div>
                        <h3 class = "wa-heading">EXPECTED OUTPUT</h3>
                        <div>
                            {ques.output[lastTestCase]}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sugg-win">
                <Chatgpt query={ques.probStat + "\n suggest a logic to solve this problem"}></Chatgpt>
            </div>
        </div>
        
    )
}

export default ErrorReport