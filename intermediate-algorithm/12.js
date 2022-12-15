//сумма всех нечетных чисел фибоначи that are less than or equal to num.

function sumFibs(num) {
    const arr = [0, 1];
    while (arr[arr.length - 1] + arr[arr.length - 2] <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr.reduce((acc, num) => {
        return (num % 2 !== 0)
            ? acc + num
            : acc;
    }, 0);
}

sumFibs(10);
