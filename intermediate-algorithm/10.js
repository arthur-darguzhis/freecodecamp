function uniteUnique(...arr) {
    // const lastSubArr = arr.pop();
    return Array.from(new Set([].concat(...arr)));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
