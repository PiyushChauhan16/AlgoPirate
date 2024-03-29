import React from "react";
import testcasePrinter from "../util/testcasePrinter.js";
import Chatgpt from "./Chatgpt.js";

const ErrorReport = ({input, output, expectedOutput}) => {
    return (
        <div className="wa-arr">
            <div className = "wa">
                <h2>OOPS! Something went wrong</h2>
                <div>
                    <div>
                        <h3 className = "wa-heading">INPUT</h3>
                        <div>
                            {input}
                        </div>
                    </div>
                    <div>
                        <h3 className = "wa-heading">OUTPUT</h3>
                        <div>
                            {output}
                        </div>
                    </div>
                    <div>
                        <h3 className = "wa-heading">EXPECTED OUTPUT</h3>
                        <div>
                            {expectedOutput}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sugg-win">
                <Chatgpt query=""></Chatgpt>
            </div>
        </div>
        
    )
}

export default ErrorReport