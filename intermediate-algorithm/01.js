function sumAll(arr) {
    let [start, end] = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = start; i <= end ;i++){
        sum += i;
    }
    return sum;
}

sumAll([4, 1]);
