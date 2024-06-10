/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    if (functions.length === 0) {
        return function(x) {
            return x;
        };
    };

    let composedFunction = function(x) {
        return x;
    };

    for (let i = functions.length - 1; i >= 0; i--) {
        let currentFunction = functions[i];
        let previousFunction = composedFunction;
        composedFunction = function(x) {
            return currentFunction(previousFunction(x));
        };
    }
    return composedFunction;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */