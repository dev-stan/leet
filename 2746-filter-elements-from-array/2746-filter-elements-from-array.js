/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    arr.forEach((element, index) => {
        if (fn(arr[index], index)) {
            filteredArr.push(element)
        }
    });
    return filteredArr;
    
};