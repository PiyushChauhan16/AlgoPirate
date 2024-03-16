import Chart from 'chart.js/auto';
import {Bar} from "react-chartjs-2";

const CPUTimeGraph = ({userCPUTimeData, pos}) => {
    let labels = [];
    let CPUTime = [];
    let backgroundColors = [];
    
    labels = userCPUTimeData.map ((e)=>e.username);
    CPUTime = userCPUTimeData.map ((e)=>e.cpuTime);
    backgroundColors = userCPUTimeData.map ((e)=>e.backgroundColor)
    const userPercentile = ((labels.length - pos)/labels.length*100).toFixed (2);
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: "CPU TIME",
                backgroundColor: backgroundColors,
                borderColor: "rgb(255, 99, 132)",
                data: CPUTime,
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

export default CPUTimeGraph;