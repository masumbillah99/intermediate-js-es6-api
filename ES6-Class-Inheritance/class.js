// syntatctic sugar
// class name first letter should be uppercase
// class -- Template for making Objects
// class constructors must be invoked with 'new'
/** 
                    OBJECT
    PROPERTY                        METHOD
Attribute or state      Do something function & procedure
*/

class Instructor {
    name;
    designation = 'web course instructor';
    team = 'web team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start support session ${time}`);
    }
    makeQuiz(module) {
        console.log(`make quiz for module ${module}`);
    }
}

const aamir = new Instructor('AAMIR KHAN', 'Mumbai');
console.log(aamir);
aamir.startSupportSession(10.00 + 'am');
aamir.makeQuiz(35);

const solaiman = new Instructor('Solaiman Khan', 'Dhaka');
console.log(solaiman);