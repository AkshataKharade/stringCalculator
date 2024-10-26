
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

function getStrArray(ipStr, delimeter) {
    let strArray = [];
    console.log('here--->', ipStr)
    if(ipStr.includes('\n')) {
       ipStr.replace('//\n', delimeter) 
    }
    console.log(ipStr);

    strArray = ipStr.split(delimeter);
    return strArray;
}

function add(ipStr) {
    let strArray = [];
    let result = 0;
    let delimeter = ',';
    
    delimeter = getDelimeterArray(ipStr);
    strArray = ipStr.split(delimeter);
    
    let tempStrArray = getStrArray(ipStr, delimeter);
    
    for (let i = 0; i < strArray.length; i++) {
        let current = parseInt(strArray[i]);
        console.log(typeof current);
        result = (current > 0) ? (result + current) : result;
    }
    return result;
}

let str = "1\n2,3";
let result = add(str);
console.log("result: ", result);
