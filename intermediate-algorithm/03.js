function destroyer(arr, ...args) {
    let valuesToRemove = [...args];
    return arr.filter((el) => !valuesToRemove.includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
