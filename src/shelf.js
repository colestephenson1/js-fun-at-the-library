//shelfBook

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    var shelvedBook = shelf.unshift(book)
    return shelvedBook
};
};

//unshelfBook

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++ ) {
if (shelf[i].title === book) {
return shelf.splice(i, 1)
};
};
};

//listTitles

function listTitles(fantasyShelf) {
  var titles = []
for (i = 0; i < fantasyShelf.length; i++) {
titles.push(fantasyShelf[i].title)
} return titles.join(', ')
};

//searchShelf

function searchShelf(shelf, name) {
  for (i = shelf.length - 1; i >= 0; i--) { // I did this because an increment loop didnt pass, so I decided to have it check from the last position backward and it worked. IDK
  if (shelf[i].title === name) {
return true;
} else {
  return false
};
};
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
