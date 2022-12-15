function myReplace(str, before, after) {
    return before[0] === before[0].toUpperCase()
        ? str.replace(before, after[0].toUpperCase() + after.slice(1))
        : str.replace(before, after.toLowerCase());
}

myReplace("I think we should look up there", "up", "Down");
