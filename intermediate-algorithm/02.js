function diffArray(arr1, arr2) {
    const filteredArray1 = arr1.filter((el) => !arr2.includes(el));
    const filteredArray2 = arr2.filter((el) => !arr1.includes(el));
    return [...filteredArray1, ...filteredArray2];
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
