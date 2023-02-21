/** 
 * breakup with va
 * no more use of var
 * let: let it to reassign
 * const: do not allow it to reassign
*/

let money = 25;
money = 35;
console.log(money);


const bird = 'moyna pakhi';
// bird = 'tota pakhi';
console.log(bird);


const nums = [32, 23, 5, 4];
// reassign is not allowed
// nums = [6, 5, 9];
nums.push(89);
console.log(nums);


const student = {
    name: 'Kamal',
    address: 'Rongpur'
}
// student = {name: 'Mofazzol'}
student.name = 'Mofazzal';
console.log(student);


/**     <-- scope -->
* কোন একটি জিনিস (variable) যদি function- এর ভিতরে declare করা হয় তাহলে ঐটার scope বা সীমা বা এরিয়া থাকবে ঐ function- এর মধ্যে। বাইরে থেকে সেটাকে access বা call করা যাবে না। এটাকে বলে local scope.
* আবার, কোন একটি variable যদি function এর বাইরে declare করা হয় তাহলে সেটাকে function- এর ভিতরেও access করা যাবে এবং function- এর বাইরেও access/call করা যাবে। আর এটাকে বলে global scope.
* let or const দ্বারা যে scope সেটাকে বলা হয় block scope. এই  let/const দ্বারা যদি কোন variable declare করা হয়ে এবং তাকে তার এরিয়ার মধ্যে যদি call করা হয় তাহলে সেটা এক্সিকিউট হবে কিন্তু তার এরিয়া বা সীমার বাইরে যদি তাকে call করা হয় তবে সেটা এক্সিকিউট হবে না বরং error দেখাবে।
* but একই variable যদি  var দ্বারা declare করা হয় তবে সেটা তার এরিয়া ও এরিয়ার বাইরে উভয় জায়গায় এক্সিকিউট হবে।
* var দিয়ে কোন ভেরিয়েবল ডিক্লেয়ার করলে সেই একই নাম দিয়ে একাধিক ভেরিয়েবল ডিক্লেয়ার করা যায়।
* কিন্তু let দিয়ে একই নাম দিয়ে একাধিক ভেরিয়েবল ডিক্লেয়ার করা যাবে না কিন্তু মান পরিবর্তন করা যাবে।
* const ভেরিয়েবলের মান দ্বিতীয়বার পরিবর্তন করা যায় না।
*/