const newPerson = name => {
    return {
        _name: name,
        set setName(newName){
            if(typeof newName === 'string'){
                return this._name = newName;
            } else {
                return 'name not string';
            }
        },
        get getName(){
            return this._name;
        }
    }
}

const personObj = newPerson('Rob')
console.log(personObj.getName)
personObj.setName = 'bill'
console.log(personObj.getName)
console.log(personObj.setName = 9);
console.log(personObj.getName)
