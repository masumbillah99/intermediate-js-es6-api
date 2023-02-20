/** function default parameter for not provided values */
/** Default Parameters: Default function parameters allow named parameters to be
initialized with default values if no value or undefined is passed. 
যদি কোন ফাংশন কল করার সময় কোন একটা প্যারামিটারকে প্রোভাইড না করা হয় তাহলে 
আমরা ডিফল্ট প্যারামিটার ইউজ করতে পারি।
*/

/** */
// 1
function add(first, second) {
    // console.log(first, second);
    second = second || 0;
    // if(second === undefined) {
    //     second = 0;
    // }
    const total = first + second;
    return total;
}
const result = add(15);
// console.log(result);

// default value -- 2
function add2(first, second = 5) {
    const total = first + second;
    return total;
}
// const result2 = add2(10, 20);
const result2 = add2(10);
console.log(result2);

// 3
function fullName(fname, lname = 'Khan') {
    const name = fname + ' ' + lname;
    return name;
}
const name = fullName('Golam');
console.log(name);