const capitalize = require('./capitalize.js');

test ('String is not capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('*el#o')).toBeNull();
})