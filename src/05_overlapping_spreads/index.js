// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the 
// result will be 5.

exports.overlappingSpreads = function(data) {
    //TODO implement me
    replacementArray = []

    data.forEach(element => {

        replacementArray.push(element - 1)
        replacementArray.push(element + 1)        
        
    });
    
    hashMap = {}
    duplicateNums = []
    replacementArray.forEach(element => {

        if (!hashMap.hasOwnProperty(element)){
            hashMap[element] = 1
        }
        else {
            if(hashMap[element] == 1)
                duplicateNums.push(element)
            hashMap[element] += 1
        }
            
          
    });
    
    result = 0
    duplicateNums.forEach(element => {

        result += element
          
    });

    return result
}