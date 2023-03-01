/**  double equal (==) vs triple equal (===), implicit conversion */
// always use ===
// equal comparison doesn't work for non-primitive

const first = 2;
const sec = '2';
if (first == sec) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}

console.log(true + false);
console.log(12 / "6");
console.log([] + null + 1);

// type coercion
// type conversion
// 