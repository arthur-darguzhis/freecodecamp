function steamrollArray(arr) {
    const newArray = []

    function levelUp(arr) {
        arr.forEach(el => (Array.isArray(el) ? levelUp(el) : newArray.push(el)));
        return arr;
    }

    levelUp(arr);

    return newArray
}

steamrollArray([1, [2], [3, [[4]]]]);
