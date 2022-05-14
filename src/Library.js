//createLibrary

function createLibrary(name, bookName) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
};

//addBook

function addBook(library, bookName) {
 if (bookName.genre === "fantasy"){
  return library.shelves.fantasy.push(bookName)
} else if (bookName.genre === "fiction") {
  return library.shelves.fiction.push(bookName)
} else if (bookName.genre === "nonFiction") {
  return library.shelves.nonFiction.push(bookName)
}
};

function checkoutBook(libraryName, bookName, genre) {
  for (i = 0; i < libraryName.shelves[genre].length; i++){
  if (libraryName.shelves[genre][i].title === bookName) {
libraryName.shelves[genre].splice(i,1)
return `You have now checked out ${bookName} from the ${libraryName.name}`;
};
}; return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
