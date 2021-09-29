function capitalize(string) {
    for (let i = 0; i < string.length; i++) {
        if ( string.charCodeAt(i) < 65 || string.charCodeAt(i) > 122 || (string.charCodeAt(i) < 97 && string.charCodeAt(i) > 90))
        return null;
    }
    if (string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90) {return string;}
    else {
    const arrOfChar = string.split("");
    arrOfChar[0] = String.fromCharCode(string.charCodeAt(0)-32);
    string = arrOfChar.join("");
    return string;
}
}


module.exports = capitalize;