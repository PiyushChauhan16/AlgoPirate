import React from "react";
import useDataGen from "../util/dataGen.js";
import useSortByCPUTime from "../util/useSortByCPUTime.js";
import CPUTimeGraph from "./CPUTimeGraph.js";
import useSortByMemUsed from "../util/useSortByMemUsed.js";
import MemUsedGraph from "./MemUsedGraph.js";
import AcceptanceCard from "./AcceptanceCard.js";
import ErrorReport from "./ErrorReport.js";
const FeedbackGen = ({ques, result, correctSol, lastTestCase}) => {
    console.log ("resukt in feedback:", ques, result, correctSol, lastTestCase)
    const userData = useDataGen (30, result);
    if (result !== undefined || lastTestCase !== undefined){
       



        if (correctSol == true){
            return (
                <AcceptanceCard userData= {userData} runtime={result.cpuTime} memory={result.memory}></AcceptanceCard>
            )
        }
        else{
            return (
                <ErrorReport ques={ques} lastTestCase={lastTestCase} result={result}></ErrorReport>
            )
        }
    }
   
    
}

export default FeedbackGen