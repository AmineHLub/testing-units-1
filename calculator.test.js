const Calculator = require('./calculator.js');

const randomApp1 = new Calculator(1,2);
const randomApp2 = new Calculator(6,7);
const randomApp3 = new Calculator(3,0);

describe('Adding', () => {
    test ('randomApp1 Works', () => {
        expect(randomApp1.add()).toEqual(3);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp2.add()).toEqual(13);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp3.add()).toEqual(3);
    })
})

describe('substracting', () => {
    test ('randomApp1 Works', () => {
        expect(randomApp1.sub()).toEqual(-1);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp2.sub()).toEqual(-1);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp3.sub()).toEqual(3);
    })
})

describe('multiplying', () => {
    test ('randomApp1 Works', () => {
        expect(randomApp1.mult()).toEqual(2);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp2.mult()).toEqual(42);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp3.mult()).toEqual(0);
    })
})

describe('division', () => {
    test ('randomApp1 Works', () => {
        expect(randomApp1.divi()).toEqual(0.5);
    })
    test ('randomApp1 Works', () => {
        expect(randomApp2.divi()).toEqual(6/7);
    })
    test ('randomApp1 Works', () => {
        expect(() => randomApp3.divi()).toThrow('Cannot divide by zero');
    })
})