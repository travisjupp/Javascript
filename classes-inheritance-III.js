/* 
* Classes are templates for objects. 
* Javascript calls a `constructor` method when we create a new instance of a class.
* `Inheritance` is when we create a parent class with properties and methods that we can extend to child classes. 
* We use the `extends` keyword to create a subclass. 
* The `super` keyword calls the `constructor()` of a parent class. 
* Static methods are called on the class, but not on instances of the class.
*/
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(num) {
        if (typeof num === "number") {
            this._numberOfStudents = num;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }
    quickFacts() {
        console.log(
            `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
        );
    }
    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents); // `super` must be called before `this`
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents); // `super` must be called before `this`
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents); // `super` must be called before `this`
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        for (const el of this._sportsTeams) {
            console.log(el);
        }
    }
}

class SchoolCatalog {
    constructor(school) {
        this._school = school;
    }
    get school() {
        return this._school;
    }
    findSchool(level) {
        // search school arr for level equal to schoolLevel
        // return object
        for (const obj of this._school) {
            if (obj.level === level) {
                return obj;
            }
        }
        // return filtered array
        // return this._school.filter(obj => obj.level === level);
    }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(lorraineHansbury.level); // => primary

const rolandPark = new MiddleSchool('Roland Park', 823);
rolandPark.quickFacts();

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;

// static method only works when called on `School`
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])); // => returns random teacher

const catalog = new SchoolCatalog([lorraineHansbury, rolandPark, alSmith]);

console.log(catalog.findSchool('primary'));


