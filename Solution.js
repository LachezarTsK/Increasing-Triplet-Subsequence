
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let firstNumber = Number.MAX_SAFE_INTEGER;
    let secondNumber = Number.MAX_SAFE_INTEGER;

    for (let current of nums) {
        if (firstNumber >= current) {
            firstNumber = current;
        } else if (secondNumber >= current) {
            secondNumber = current;
        } else {
            return true;
        }
    }
    return false;
};
