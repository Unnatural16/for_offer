/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let map=new Set();
    let resultmap=new Set();
    for(let item of s){
        if(map.has(item)){
            resultmap.delete(item);
        }else{
            map.add(item);
            resultmap.add(item);
        }
    }
    let array=[...resultmap]
    return array.length?array[0]:' '
};