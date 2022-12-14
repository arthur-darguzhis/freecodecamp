const squareList = arr => {
    // Only change code below this line
    return arr.reduce((acc, el) => {
        return Number.isInteger(el) && el > 0 ? [...acc, el ** 2]: acc
    }, [] )
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
