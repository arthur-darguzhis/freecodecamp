// Only change code below this line
function urlSlug(title) {

    return title.toLowerCase().trim().split(' ').filter((el) => el != '').join('-');
}
// Only change code above this line
urlSlug(" Winter Is  Coming")
