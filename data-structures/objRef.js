const Node = require("./Node");

class objRef {
	
	constructor() {
		this.ob = 'originalVal';
		this.node = new Node('orignalNode');
	}

	changeObVal() {
		let newOb = this.ob;
		newOb = 'newVal';
		let newNode = this.node;
		newNode = 'newVal';

	}

	passRef(val) {
		this.node = val;
	}


}


let ob1 = new objRef();
console.log('ob1',ob1);
ob1.changeObVal();

console.log('ob1',ob1);
ob1.passRef(new Node('passedVal_Ref?'));

module.exports = objRef;
