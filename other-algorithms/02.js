function convertToRoman(num) {
    const numbersMap = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    const res = [];
    numbersMap.forEach(function (pair) {
        const [roman, decimal] = pair;
        while (num >= decimal) {
            res.push(roman);
            num -= decimal;
        }
    });
    return res.join('');
}

convertToRoman(8)
