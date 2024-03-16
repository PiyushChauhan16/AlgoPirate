import useDataGen from "./dataGen.js";

const useSortByMemUsed = (userData, submittedSolUserId) => {
    let arr = [];
    for (let i = 0; i < userData.length; i++){
        // console.log (userData[i])

        let dataPoint = {
            username: userData[i].username,
            memUsed: userData[i].memory
        }
        if (userData[i].username === submittedSolUserId){
            dataPoint.backgroundColor= "#18B71B"
        }
        else{
            dataPoint.backgroundColor= "#747271"
        }
        arr.push (dataPoint);
    }

    arr.sort ((a, b)=>a.memUsed-b.memUsed)

    let pos = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].username == submittedSolUserId) pos = i+1;
    }

    return [arr, pos]
}

export default useSortByMemUsed;