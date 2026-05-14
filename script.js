class MathFunctions {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide () {
    return this.a / this.b;
  }
}

const myCalculator = new MathFunctions(10, 5);

console.log(myCalculator.add());