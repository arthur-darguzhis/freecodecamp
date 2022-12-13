function rangeOfNumbers(startNum, endNum) {

    if(startNum === endNum){
        return [startNum]
    }

    const resultArray = rangeOfNumbers(startNum, endNum - 1)
    resultArray.push(endNum);
    return resultArray;
};

rangeOfNumbers(6, 9)
