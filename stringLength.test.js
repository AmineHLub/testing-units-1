const stringLength = require('./stringLength.js');

test ('the value given is true', () => {
    expect(stringLength('hello')).toEqual(5);
})

test ('incorrect length', () => {
    expect(() => stringLength('h')).toThrow('Given string length is not within [1,10]');
    expect(() => stringLength('helloooooo')).toThrow('Given string length is not within [1,10]');
})