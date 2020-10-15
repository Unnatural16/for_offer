
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s.replace(/\s/g, '') !== '' && !isNaN(Number(s))
};
