function add(x) {
    // Only change code below this line
    return function (y) {
        return function (z) {
            return z + y + x;
        }
    }
    // Only change code above this line
}

add(10)(20)(30);
