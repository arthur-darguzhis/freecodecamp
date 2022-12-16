function addTogether(...args) {
    let a = args.shift();
    if(typeof a !== 'number'){
        return;
    }
        if(args.length == 0){
        return (b) => typeof b === "number" ? a+b : undefined;
    }

    let b = args.shift()
    if(typeof b !== 'number'){
        return;
    }

    return a+b;
}

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
// addTogether(5, undefined)
// addTogether(2, "3")
