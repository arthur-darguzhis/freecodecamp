function titleCase(str) {
    return str.split(' ').map((word) => word.at(0).toUpperCase() + word.toLowerCase().slice(1)).join(' ')
}

titleCase("sHoRt AnD sToUt");
