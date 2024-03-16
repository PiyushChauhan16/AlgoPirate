const testcasePrinter = (testcase) => {
    let arr = []
    console.log (testcase)
    for (let key in testcase){
        arr.push (<p>{key + ":" + testcase[key]}</p>)
    }

    // console.log (arr)
    return arr;
}

export default testcasePrinter