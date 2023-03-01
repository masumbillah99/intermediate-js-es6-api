/** keys, values, entries, delete, seal, freeze  -- object method */
const bottle = {
    color: 'yellow',
    price: 50,
    isCleand: true,
    capacity: 11,
};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);

const twoDimensionalArray = [
    ['color', 'yellow'],
    ['price', 50],
    ['isCleand', true],
    ['capacity', 11],
];

console.log(bottle);
// Object.seal(bottle);        // lock object properties
Object.freeze(bottle);
delete bottle.isCleand;     // delete object property
bottle.price = 100;         // modify object property value
bottle.height = 13;         // can't add new property if sealed
console.log(bottle);
