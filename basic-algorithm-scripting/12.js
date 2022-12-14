function frankenSplice(arr1, arr2, n) {
    let result = [...arr2];
    let sliced = result.splice(n, 0, ...arr1);
    return [...result, ...sliced];
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
