/** 
 * Inheritance enables you to define a class that takes all the 
functionality from a parent class and allows you to add more.

 * Using class inheritance, a class can inherit all the methods 
and properties of another class.

 * Inheritance is a useful feature that allows code reusability.
*/

/** 
 * Prototypical inheritence refers to the ability to access object properties
from another object. We use a Javascript prototype to add new properties and
methods to an existing object constructor.
*/

// the prototype chain
// যেখান থেকে ইনহেরিট করে সেখান থেকে সে কিছু ডাটাকে অ্যাক্সেস করতে পারে।

class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    };
}

class Instructor extends TeamMember {
    designation = 'web course instructor';
    team = 'web team';
    constructor(name, location) {
        super(name, location);
    };
    startSupportSession(time) {
        console.log(`start support session ${time}`);
    };
    makeQuiz(module) {
        console.log(`make quiz for module ${module}`);
    };
};

class Developer extends TeamMember {
    designation = 'Web Developers';
    team = 'developer team';
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    };
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    };
    release(version) {
        console.log(`please release the version ${version}`);
    };
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos';
    team = 'Job Placement team';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    };
    provideResume(resume) {
        console.log(`please submit your ${resume}`);
    };
    prepareStudent(skill) {
        console.log(`Plase prepare student by their ${skill}`);
    }
}

const malia = new Developer('Malia', 'Khulna', 'React');
console.log(malia);
malia.provideFeedback();

const bipasha = new JobPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha);