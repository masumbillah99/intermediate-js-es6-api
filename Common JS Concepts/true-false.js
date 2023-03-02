/** 
 Truthy: 
    1. true
    2. any number (+ve, -ve) will be truthy other than 0
    3. any string other than empty string
    4. '0', 'false'
    5. [] empty object
    6. {} empty array
    7. all other values

 Falsy:
    1. false
    2. 0
    3. empty string ''
    4. undefined
    5. null
    6. NaN
*/

// const x = 8;
// const x = 'solaiman';
// const x = '';
let x = [];
console.log(x);
if (x) {
    console.log('value of x is truthy');
} else {
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = '';
if (!x) {
    console.log('y is falsy');
} else {
    console.log('y is truthy');
}

// check truthy
const z = ' ';
if(!!x) {
    console.log('value is truthy');
} else {
    console.log('value is falsy');
}