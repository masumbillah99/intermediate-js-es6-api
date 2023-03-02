function greeting(person) {
    console.log(person);
}

// const name = 'halim mama';
// const number = [45, 68, 75];
const laptop = { price: 48000, brand: 'Lenovo', memory: '8gb' };

function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetMorning(name) {
    console.log('Good Morning', name);
}

function greetEvening (name) {
    console.log('Good Evening', name);
}

greeting(greetMorning, 'shofiq');
greeting(greetEvening, 'sabuj');