/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let value = init;
    function increment() {
        return ++init;
    }
    function decrement() {
        return --init;
    }
    function reset() {
        init = value;
        return init;
    }
    
    return {
        increment,
        decrement,
        reset
    };
};
