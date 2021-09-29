function stringLength(string) {
    if (string.length > 1 && string.length < 10) {
        return string.length;
    }
    else {
        throw new Error ('Given string length is not within [1,10]')
    }
}

module.exports = stringLength;