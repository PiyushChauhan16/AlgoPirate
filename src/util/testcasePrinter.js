const testcasePrinter = (testcase) => {
    let arr = []
    console.log (testcase)
    for (let key in testcase){
        arr.push (<p>{key + ":" + testcase[key]}</p>)
    }

    return arr;
}

export default testcasePrinter