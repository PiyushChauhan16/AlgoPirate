import Chart from 'chart.js/auto';
import {Bar} from "react-chartjs-2";

const MemUsedGraph = ({userMemUsedData, pos}) => {
    let labels = [];
    let memoryUsed = [];
    let backgroundColors = [];
    
    labels = userMemUsedData.map ((e)=>e.username);
    memoryUsed = userMemUsedData.map ((e)=>e.memUsed);
    backgroundColors = userMemUsedData.map ((e)=>e.backgroundColor);
    const userPercentile = ((labels.length - pos)/labels.length*100).toFixed (2);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "MEMORY USED",
                backgroundColor: backgroundColors,
                borderColor: "rgb(255, 99, 132)",
                data: memoryUsed,
                borderRadius: 50,
                barThickness: 15
            }
        ]
    }

    return (
        <div>
            <Bar data={data}></Bar>
            <div className="pos">
                <span >Your beat <span>{userPercentile}%</span> coders 😎</span>
            </div>
        </div>
        
    )
}

export default MemUsedGraph;