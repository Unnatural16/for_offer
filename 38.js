/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    s=Array.from(s)
    function code(m) {
        if(m.length==1)return[m]
        let result = [];
        const no=new Set();
        for (let i = 0; i < m.length; i++) {
            if(no.has(m[i])){
                continue;
            }else{
                no.add(m[i]);
            }
            let sub_array =[...m]
            sub_array.splice(i,1)
            const b=code(sub_array)
            const e=b.map(item =>item.concat(m[i]))
            result=result.concat(e)
        }
        return result
    }
    return code(s).map(item=>item.join('')) 
};
const a=permutation('aba')
console.log(permutation('abc'))