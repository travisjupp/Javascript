// Destructuring technique: property value shorthand
// When the props key and value have the same name the key can be removed. 
function robotFactory(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
// prop val shorthand
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
console.table(newRobot)