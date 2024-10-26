function getDelimeterArray(ipStr) {
    let delimeter = ',';
    if(
        (ipStr.charAt(0) === '/' && ipStr.charAt(1) === '/') &&
        (ipStr.includes('\n'))
    ) {
        let splitStr = ipStr.split('\n');
        let delimeterArray = splitStr[0].split('//')
        console.log(delimeterArray);
        delimeter = delimeterArray[0]
    }
    return delimeter;
}

function add(ipStr) {
    let strArray = [];
    let result = 0;
    let delimeter = ',';
    
    delimeter = getDelimeterArray(ipStr);
    strArray = ipStr.split(delimeter);
    
    for (let i = 0; i < strArray.length; i++) {
        if (!strArray[i] && strArray[i].includes('\n')) {
            let appendArray = strArray[i].split('\n');
            for (let j = 0; j < appendArray.length; j++) {
                strArray.push(appendArray[i]);
            }
        }
        let current = parseInt(strArray[i]);
        result = (current > 0) ? (result + current) : result;
    }
    return result;
}

// let str = "1,5";
// let str = "1\n2,3";
let str = "//;\n1;2";
let result = add(str);
console.log("result: ", result);
