/** Scope determins the accessibility (visibility) of variables. Javascript has 
3 types of scope: 
    1. Block scope, 
    2. Function scope & 
    3. Global scope 
*/

function add(a, b) {
    const total = a + b;
    console.log(a, b);
    if (b > 5) {
        const sum = 234 + a + b;
    };
    return total;
}

// console.log(a, b);
// console.log(total);
add(5, 9);