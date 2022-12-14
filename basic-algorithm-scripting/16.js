function chunkArrayInGroups(arr, size) {
    let result = [];
    let chunksCount = arr.length / size
    for(let i = 0; i < chunksCount; i++){
        result.push(arr.splice(0, size))
    }
    return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
