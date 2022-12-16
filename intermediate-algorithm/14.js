function smallestCommons(arr) {
    arr.sort((a, b) => a - b);

    for (let i = arr[1] - 1; i > arr[0]; i--) {
        arr.splice(1, 0, i);
    }

    loop: for (let i = arr[arr.length - 1]; ; i++) {
        for (let o = 0; o < arr.length; o++) {
            if (!Number.isInteger(i / arr[o])) {
                continue loop;
            }
        }
        return i;
    }
}
