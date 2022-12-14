function mutation(arr) {
    const [string, charsForSearching] = arr.map((el) => el.toLowerCase());
    return [...charsForSearching].every((char) => string.includes(char));
}

mutation(["Mary", "Army"]);
