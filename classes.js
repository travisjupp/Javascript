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

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

// Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime() {
    const bandwidth = this.data - this.users * 5 >= 10;
    return bandwidth;
    }
  }
  
  const library = new Network(50, 9);
  console.log(library.movieTime());

