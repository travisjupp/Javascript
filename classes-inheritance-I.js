/* 
* Classes are templates for objects. 
* Javascript calls a `constructor` method when we create a new instance of a class.
* `Inheritance` is when we create a parent class with properties and methods that we can extend to child classes. 
* We use the `extends` keyword to create a subclass. 
* The `super` keyword calls the `constructor()` of a parent class. 
* Static methods are called on the class, but not on instances of the class.
*/
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    static generatePassword() { // static method not available to subclasses
        return Math.floor(Math.random() * 10001);
    }
};
//   extend parent class HospitalEmployee to subclass Nurse
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name); // always call the super method before you can use the `this` keyword
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
};

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// Note: The subclass inherits all of the parent’s getters, setters, and methods. You can also use the `super` keyword to set properties in the parent class.

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance() {
        return this._insurance;
    }
};

const doctorHeisen = new Doctor('Bill', false);
console.log(doctorHeisen.name);
console.log(doctorHeisen.insurance);
doctorHeisen.takeVacationDays(20);
console.log(doctorHeisen.remainingVacationDays);