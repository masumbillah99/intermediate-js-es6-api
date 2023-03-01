/** Borrow method from object and use it on another object */

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'eng', 'bangla'],
    exam: function () {
        return this.name + ' is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    },
};

const result = kodomAli.exam();

const badam = {
    name: 'Kacha badam',
    money: 8000,
}

const result2 = kodomAli.exam.call(badam);
const badamMoney = kodomAli.treatDey.call(badam, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badam, [1000, 100]);
console.log(badamMoney2);

const badamTreat = kodomAli.treatDey.bind(badam);
const remaining = badamTreat(1000, 100);
console.log(remaining);