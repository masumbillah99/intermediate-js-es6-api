// console.log(this);

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'eng', 'bangla'],
    exam: function () {
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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

// kodomAli.exam();

const badam = {
    name: 'Kacha badam',
    money: 8000,
}

badam.exam = kodomAli.exam;
badam.exam();


function clickHandler() {
    console.log('inside click handler', this);
}

document.getElementById('btn-click2').addEventListener('click', function () {
    console.log(this);
});

