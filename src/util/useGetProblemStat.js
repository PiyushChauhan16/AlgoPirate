import problems from "./problems.js"

const useGetProblemStat = (probId) => {
    for (let i = 0; i < problems.length; i++){
        if (problems[i].probId == probId){
            return problems[i];
        }
    }

    return -1;

}

export default useGetProblemStat;