// create object using object literals
const player = {};

player.name = 'Tazbir Mahmud';
player.speciality = 'Bowling';

// object method
player.bat = function () {
    console.log('swing your bat');
}
// console.log(player);
player.bat();

const student = {
    name: 'Mandey',
    job: 'Khai Dandey',
    ball: function () {
        console.log('throw the unda');
    },
    salary: 30233,
};
// console.log(student);

// 2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);
// console.log(atel);

// 4. class
class Person {
    name = 'abul';
    address = 'Ghat sodor';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(55);
// console.log(person1);

// 5. Constructor function
function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('tesla', 32000);
// console.log(tesla);

const nayok = { name: 'hero', age: 28, isMarried: false };
console.log(Object.entries(nayok));

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; 
console.log(getGirlFriend()); 
