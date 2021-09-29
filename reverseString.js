function reverseString(string) {
    let arr = string.split("");
    arr = arr.reverse();
    string = arr.join("");
    return string;
}

module.exports = reverseString;