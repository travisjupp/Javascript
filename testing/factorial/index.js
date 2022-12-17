const Calculate = {
  factorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  },
};

module.exports = Calculate;
