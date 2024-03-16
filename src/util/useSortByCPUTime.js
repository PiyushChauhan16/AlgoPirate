import useDataGen from "./dataGen.js";

const useSortByCPUTime = (userData, submittedSolUserId) => {
    let arr = [];
    let pos = -1;

    for (let i = 0; i < userData.length; i++){
        // console.log (userData[i])

        let dataPoint = {
            username: userData[i].username,
            cpuTime: userData[i].cpuTime
        }
        if (userData[i].username === submittedSolUserId){
            dataPoint.backgroundColor= "#157DFF"
        }
        else{
            dataPoint.backgroundColor= "#747271"
        }
        arr.push (dataPoint);
    }

    arr.sort ((a, b)=>a.cpuTime-b.cpuTime)

    for (let i = 0; i < arr.length; i++){
        if (arr[i].username == submittedSolUserId) pos = i+1;
    }

    return [arr, pos]
}

export default useSortByCPUTime;