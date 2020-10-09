/**
 * @param {number} n
 * @return {number}
 */
let dict = { 0: 0, 1: 1 }
var fib_digui = function (n) {
    return dict[n] != null ? dict[n] : dict[n] = (fib(n - 1) + fib(n - 2)) % 1000000007
};
//上面的是递归法，内存消耗较大
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0) return 0;
    let fast = 1
    let slow = 0
    while (n != 1) {
        let temp = slow
        slow = fast
        fast = (fast + temp) % 1000000007
        n--
    }
    return fast
};
console.log(fib(81))