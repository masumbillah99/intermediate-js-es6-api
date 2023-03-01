const student = {
    name: 'Kodom Ali',
    study: 'math',
    subjects: ['calculas', 'eng', 'bangla'],
    exam: function () {
        return this.name + 'is participating in an exam';
    },
    money: 5000,
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    },
};

const result = student.exam();
// console.log(result);
const reExam = student.improveExam('Algebra');
console.log(reExam);
const remaining = student.treatDey(500, 50);
console.log(remaining);
const treat = student.treatDey(300, 30);
console.log(treat);