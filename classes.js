// Classes are templates for creating objects.
// They contain methods for working on the data

// Ex. 1
class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    // note: Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// create a new instance of Surgeon
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

// access some data
console.log(surgeonRomero.name);

// work on some data
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

// Ex. 2
class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
    // calculate if there's enough bandwidth to watch a movie
    movieTime() {
        const bandwidth = (this.data - this.users) * 5 >= 10;
        return bandwidth;
    }
}

// create a new instance of Network
const library = new Network(50, 5);

// view instance (object created)
console.log(library);

// calculate if there's enough bandwidth for movie-time
console.log(library.movieTime());
