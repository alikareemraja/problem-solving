// One gaming company found out that they are losing money because some players are using scripts that are playing for 
// players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them
// they discovered that those scripts are using the same sequence of commands all the time.
// 
// Your task is to cleaned up access logs to discover bots. Cleaned up access log of one player would look like an space
// separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least 2 times from
// the cleaned up access log.
// 
// For example we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.


// Notes from Developer: Ran out of time to finish, the mistake to be fixed here is not always split in fixed distance of 3, rather iterate over the joined string by first splitting 3mers at position 0, matching with our first 3mer and then at position 1 until the end. A brute force solution, but would get the job done. 

exports.botProtection = function(data) {
    //TODO implement me
    result = false
    len = data.length
    for (var index = 0; index < len; index++){
        
        fullString = data.join(" ");

        vals = replaceNthElement(fullString)
        console.log(vals)
        hashMap = {}
        vals.forEach(element => {

            if (!hashMap.hasOwnProperty(element)){
                hashMap[element] = true
            }
            else {
                result = true
                return result
            }
            
        });
        data.shift();
    }

    return result
}

function replaceNthElement(fullString){
    let n = 3;
    let ch = ' ';

    let regex = new RegExp("((?:[^" +ch+ "]*" +ch+ "){" + (n-1) + "}[^" +ch+ "]*)" +ch, "g");

    str = fullString.replace(regex, '$1,');

    return str.split(",")
}