// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
// 
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function(data) {
    //TODO implement me
    result = {
        "min": Number.MAX_SAFE_INTEGER,
        "max": Number.MIN_SAFE_INTEGER
    }

    data.forEach(element => {
        
        
        if(element > result.max){
            result.max = element
        }

        if(element < result.min){
            result.min = element
        } 

    });
    return result
}