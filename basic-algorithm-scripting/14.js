function getIndexToIns(arr, num) {
    let indexToInsert = 0;
    arr.sort((a, b) => a - b)
    arr.forEach((el, index) => {
        if (el < num) {
            indexToInsert = index + 1;
            return;
        }
    });
    return indexToInsert;
}

getIndexToIns([2, 5, 10], 15);
