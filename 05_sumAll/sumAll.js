const sumAll = function(val1, val2) {

    let val1Type = typeof val1
    let val2Type = typeof val2
    let itrVar = 0

    if (val1Type !== 'number' || val2Type !== 'number' || val1 < 0 || val2 < 0) {
        return 'ERROR'
    }

    for (let i = Math.min(val1,val2); i < (Math.max(val1,val2) + 1); i++) {
        itrVar += i
    }
    
    let sum = itrVar
    return sum
};

// Do not edit below this line
module.exports = sumAll;
