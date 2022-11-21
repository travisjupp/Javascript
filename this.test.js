// If you are nesting standard functions notation then this is not lexically bound (will be undefined). To get around this, use Arrow Functions (preferred), .bind, or locally define this outside of the function.


class Test {
  constructor() {
    this.number = 3;
  }
  move() {
    console.log('works!');
  }
  test() {

    this.move();
    function getFirstThis() {
       return this;
    }

    const getSecondThis = () => {
       return this;
    };

    const getThirdThis = getFirstThis.bind(this);
    
    const $this = this;
    function getFourthThis() {
      return $this;
    }

    // undefined
    console.log(getFirstThis());
    
    // All return "this" context, containing the number property
    console.log(this); 
    console.log(getSecondThis());
    console.log(getThirdThis());
    console.log(getFourthThis());
  }
}

new Test().test();