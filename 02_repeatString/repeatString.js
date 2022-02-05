const repeatString = function(string, num) {
    let inputString = string
    let numReps = num
    let outputString = ''

    if (numReps < 0) {
        return 'ERROR'
    } else {
        while (numReps > 0) {  
        outputString += inputString
        numReps--
        }
        return outputString
    }

};

// Do not edit below this line
module.exports = repeatString;
