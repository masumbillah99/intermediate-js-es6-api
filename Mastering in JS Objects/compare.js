/** Compare objects, referential integrity */

// const first = { a: 2, b: 5, d: 8 };
// const sec = { a: 2, b: 5, c: 8 };
// const third = sec;

// if (third === sec) {
//     // console.log('they are same');
// } else {
//     // console.log('different');
// }

/** do not use this method to comare object or array */
const first = { a: 2, b: 5, d: 8 };
const sec = { a: 2, b: 5, c: 8 };

const firstString = JSON.stringify(first);
const secString = JSON.stringify(sec);

// if (firstString === secString) {
//     console.log('same');
// } else {
//     console.log('different');
// }

function compareObject(first, sec) {
    const firstKeys = Object.keys(first);
    const secKeys = Object.keys(sec);
    if (firstKeys.length === secKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== sec[key]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

const output = compareObject(first, sec);
console.log(output);

