/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    for(var i=0; i<s.length; i++){
        if(s.charAt(i)==' '){
            s=s.slice(0,i)+"%20"+s.slice(i+1)
            i+=2
        }
    }
    return s
};
console.log(replaceSpace('我 爱 你'))