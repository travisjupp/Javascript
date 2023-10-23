// Shorthand property-name syntax
// When the props key and value have the same name the key can be removed.

// Pre ES6 syntax
function robotFactoryPreES6(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep: function() {
      console.log('Beep Boop');
    }
  }
};

// ES6 prop/val shorthand syntax
function robotFactoryES6(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

// Both functions return the same object
const newPreES6Robot = robotFactoryPreES6('P-501', false);
console.log(newPreES6Robot.model); // P-501
console.log(newPreES6Robot.mobile); // false

const newES6Robot = robotFactoryES6('P-501', false);
console.log(newES6Robot.model); // P-501
console.log(newES6Robot.mobile); // false
