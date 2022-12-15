function sumPrimes(num) {
    let result = 0;
    firstLevelLoop: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue firstLevelLoop;
            }
        }
        result += i;
    }
    return result;
}

sumPrimes(10);
