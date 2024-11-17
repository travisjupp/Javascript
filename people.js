
class propaganda {
    
    constructor() {
        this.result = 'WE ';    
    }
    
    people(arg) {
        switch (arg) {
        case 'UNITED':
            this.result += 'STAND';
            return this.result;
        case arg !== 'UNITED' ? arg : false :
            this.result += 'F';
        case arg:
            this.result += 'A';
        case arg:
            this.result += 'L';
        case arg:
            this.result += 'L';
        default:
            console.log(this.result);
            return this.result += " \u{1F480}";
        }
    }
}

let communique = new propaganda;
if (communique instanceof propaganda) communique.people('DIVIDED');

