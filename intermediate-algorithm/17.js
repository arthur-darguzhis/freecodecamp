function binaryAgent(str) {
    return str
        .split(" ")
        .map(char => String.fromCharCode(parseInt(char, 2)))
        .join("");
}
