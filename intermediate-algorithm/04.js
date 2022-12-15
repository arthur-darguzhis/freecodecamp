function whatIsInAName(collection, source) {
    return collection.filter(el => {
       for (let prop in source){
           if(source[prop] !== el[prop]){
               return false;
           }
       }
       return true;
    });
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"});
