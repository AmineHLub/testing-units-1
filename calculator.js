class Calculator {
    constructor(a,b){
    this.a = a;
    this.b = b
    }
    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mult() {
        return this.a * this.b;
    }
    divi() {
        if (this.b != 0) {
        return this.a / this.b;
        }
        throw new Error ('Cannot divide by zero');
    }
}

module.exports = Calculator;