let useDataGen = (numOfUsers, newUserData) => {
    let data = [];

    for (let i = 0; i < numOfUsers; i++){
        let userData = {
            username: i,
            cpuTime: String((Math.random()).toFixed(2)),
            language: {
                id: "cpp17",
                version: 1,
                version_name:"g++ 17 GCC 11.1.0"
            },
            memory: String (Math.ceil(Math.random()*1000)),
        }

        data.push (userData)
    }

    console.log ("newUserData:", newUserData);
    newUserData.username = numOfUsers;
    data.push (newUserData);

    return data;
}



export default useDataGen;