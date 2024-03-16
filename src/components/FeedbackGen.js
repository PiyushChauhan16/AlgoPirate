import React, { memo } from "react";
import useDataGen from "../util/dataGen.js";
import AcceptanceCard from "./AcceptanceCard.js";
import ErrorReport from "./ErrorReport.js";

const FeedbackGen = ({input, output, expectedOutput, cpuTime, memory, correctSol, setFlag}) => {
    const newUserData = {
        cpuTime:cpuTime,
        memory:memory
    }
    console.log (`cputime: ${cpuTime} memory: ${memory}`)
    const userData = useDataGen (30, newUserData);
    if (correctSol == true){
        return (
            <AcceptanceCard userData={userData} cpuTime={cpuTime} memory={memory}></AcceptanceCard>
        )
    }
    else{
        return (
            <ErrorReport input = {input} output={output} expectedOutput = {expectedOutput}></ErrorReport>
        )
    }
}

export default FeedbackGen