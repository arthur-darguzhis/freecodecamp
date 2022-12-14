// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    const copyOfBookList = [...bookList]
    copyOfBookList.push(bookName);
    return copyOfBookList;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    const copyOfBookList = [...bookList]
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

        copyOfBookList.splice(book_index, 1);
        return copyOfBookList;

        // Change code above this line
    }
}
