/** (advanced) object and array Destructuring */
/** একটা Array/object থেকে multiple ডাটা extract করে আনা কে destructuring বলে। */
/** 1. Array destructuring তে sequence maintain করতে হবে।
    2. Object destructuring তে sequence maintain করতে হয় না।
        2.1 Property নাম সেম থাকতে হবে।
*/
const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: 3494233,
    price: 3900,
}

// const phone = fish.phone;
// const color = fish.color;
// const address = fish.address;

const { } = fish;

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);

const { age, profession } = { name: 'Calmas', age: 57, profession: 'artist' };
console.log(age, profession);

const { address } = fish;
console.log(address);

// array destructuring
const [a, b] = [23, 95, 38, 239];
console.log(a, b);

function getNames() {
    return ['Alim', 'Halim'];
}
const [baba, caca] = getNames();
console.log(baba, caca);

/** 
 * write a
*/