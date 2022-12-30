// // callback hell / pyramid of doom
// function doStep1(init, callback) {
//     const result = init + 1;
//     callback(result);
//   }
  
//   function doStep2(init, callback) {
//     const result = init + 2;
//     callback(result);
//   }
  
//   function doStep3(init, callback) {
//     const result = init + 3;
//     callback(result);
//   }
  
//   function doOperation() {
//     doStep1(0, (result1) => {
//       doStep2(result1, (result2) => {
//         doStep3(result2, (result3) => {
//           console.log(`result: ${result3}`);
//         });
//       });
//     });
//   }
  
//   doOperation();


// function step1(value) {console.log('C')}
// function step2(value) {console.log('A')}
// function step3(value) {console.log('T')}

// function buildCat() {
//     step1();
//     step2();
//     step3();
// }
// buildCat();

/* ----------------------- */
let res = '';
function dogStep3(value) {
  setTimeout(() => {
      res += value;
  }, 6000);
}
function dogStep2(value) {
  setTimeout(() => {
      res += value;
  }, 3000);
}
function dogStep1(value) {
  setTimeout(() => {
      res += value;
  }, 0);
}
function buildDog() {
  dogStep3('G');
  dogStep2('O');
  dogStep1('D');
}
buildDog();

setTimeout(() => {
  console.log(res);
}, 7000)

// let result = '';
// function step3() {
//     result += 'G';
// }
// function step2() {
//   setTimeout(() => {
//     result += 'O';
//   }, 0);
// }
// function step1() {
//   setTimeout(() => {
//     result += 'D';
//   }, 1000);
// }
// const buildDog = () => {
//   return new Promise((resolve, reject) => {

//       step2();
//       resolve(result);
//       reject(Error('Prom rejected'));
//     });
  
// }

// const handleSuccess = (resolvedVal) => {
//   console.log(resolvedVal);
// }

// buildDog().then(handleSuccess).catch((err) => {console.log(err)});


// function dogStep3(value) {setTimeout(() => {console.log(value)}, 9000)}
// function dogStep2(value) {setTimeout(() => {console.log(value)}, 5000)}
// function dogStep1(value) {setTimeout(() => {console.log(value)}, 0)}
// function buildDog() {
//   dogStep3('G');
//   dogStep2('O');
//   dogStep1('D');
// }
// buildDog();

// var result = '';
// function step1(val) {
//     result += val;
// }

// function step2(val) {
//     result += val;
// }

// function step3(val) {
//     result += val;
// }

// function stepCaller() {
//     setTimeout(function s1(){
//         step1('T');
//     },6000);
    
//     setTimeout(function s2(){
//         step2('A');
//     },3000);
    
//     setTimeout(function s3(){
//         step3('C');
//     },1000);
// }

// stepCaller();
// setTimeout(function ret(){
//     console.log('outter result:',result);
// },6000);


const withAsync = async num => num === 0 ? 'zero' : 'non-zero';

withAsync(100)
  .then(resolveValue =>console.log(`promise: ${resolveValue}.`));

//
function withConstructor(num){
  return new Promise((resolve, reject) => {
    num === 0 ? resolve('zero') : resolve('non-zero');
  });
}

withConstructor(0)
  .then(resolveValue => console.log(`promise: ${resolveValue}.`));
