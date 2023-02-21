/** array map to do one line loop magic */

const numbers = [23, 48, 79, 05, 49, 30];

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = number * 2;
        output.push(double);
    }
    return output;
}

const output = getDouble(numbers);
console.log(output);