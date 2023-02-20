// function declaration
function add(first, sec) {
    const total = first + sec;
    return total;
}

const number = 55;

// function expression
const add1 = function add1(first, sec) {
    const total = first + sec;
    return total;
}

// function expression with anonymous function
const add2 = function (first, sec) {
    const total = first + sec;
    return total;
}

const add3 = function (first, sec) {
    return first + sec;
}

const result = add3(5, 25);
console.log(result);