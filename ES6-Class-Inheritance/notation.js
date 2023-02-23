const student = {
    name: 'Kolim uddin',
    age: 17,
    class: 'TEN',
    marks: {
        math: 39,
        bangla: 85,
        physics: 95,
    },
}

const marks = student.marks;
const math = student.marks.math;

const physics = student['marks']['physics'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
// console.log(physics);