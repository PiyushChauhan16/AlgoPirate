import React from "react";
import useSortByCPUTime from "../util/useSortByCPUTime.js";
import CPUTimeGraph from "./CPUTimeGraph.js";
import useSortByMemUsed from "../util/useSortByMemUsed.js";
import MemUsedGraph from "./MemUsedGraph.js";

const AcceptanceCard = ({userData,runtime, memory}) => {
    const [sortedCPUTime, cpuTimePosOfUser] = useSortByCPUTime (userData, 30);
    const [sortedMemUsed, memUsedPosOfUser] = useSortByMemUsed (userData, 30);
    let [flag, setFlag] = React.useState (0);

    return (
        <div>
            <div className="code-perf-arr">
                <button className={"code-perf " + (flag == 0 ? "selected": "")} onClick={()=>setFlag (0) }>
                    <span className="btn-name">RUNTIME </span>
                    <br></br>
                    <span className="btn-data">{runtime + "ms"}</span>
                </button>
                <button className={"code-perf "  + (flag == 1 ? "selected": "")} onClick={()=>setFlag (1)}>
                    <span className="btn-name">MEMORY </span>
                    <br></br>
                    <span className="btn-data">{memory + "KB"}</span>
                
                </button>
            </div>
            
            <div>
                
                {(flag === 0)?
                <CPUTimeGraph userCPUTimeData={sortedCPUTime} pos = {cpuTimePosOfUser}></CPUTimeGraph>:
                <MemUsedGraph userMemUsedData={sortedMemUsed} pos = {memUsedPosOfUser}></MemUsedGraph>}

            </div>
            <div>
                <textarea
                    placeholder="Write your notes"
                ></textarea>
            </div>
            

        </div>
    )
}

export default AcceptanceCard