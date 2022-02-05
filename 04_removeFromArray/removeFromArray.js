const removeFromArray = function(array, itemRmv1, itemRmv2, itemRmv3, itemRmv4) {

    const sourceArray = array
    
    if (itemRmv2 === undefined) {
        itemRmv2 = ''
    }
    if (itemRmv3 === undefined) {
        itemRmv3 = ''
    }
    if (itemRmv4 === undefined) {
        itemRmv4 = ''
    }

    const iterationArray = [itemRmv1, itemRmv2, itemRmv3, itemRmv4]

    for (let i of iterationArray) {

        let indexNum = sourceArray.indexOf(i)

        if (indexNum < 0) {
            let notFound = 'Not found!'
        }
        else {
            sourceArray.splice(indexNum,1)
        }
    }
    
    return sourceArray
};


// Do not edit below this line
module.exports = removeFromArray;
