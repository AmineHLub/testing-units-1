const reverseString = require('./reverseString.js');

test('it is reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
})