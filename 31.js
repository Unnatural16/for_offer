/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if(pushed.length!=popped.length) return false;
    let array = []
    while (popped.length > 0) {
        if (array[array.length - 1] == popped[0]) {
            array.pop()
            popped.shift()
        } else {
            if (pushed.length == 0) return false
            array.push(pushed.shift())
        }
    }
    return true
};