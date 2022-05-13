
//createTitle
function createTitle(bookIdea) {
return `The ${bookIdea}`
};

//buildMainCharacter
function buildMainCharacter(name, age, pronouns) {
return {
  name: name,
  age: age,
  pronouns: pronouns
};
};

//saveReview
function saveReview(reviews, bookRevs) {
  if (bookRevs.includes(reviews)) {
    return reviews;
  } else {
    return bookRevs.push(reviews)
  }
};

// calculatePageCount
function calculatePageCount(bookTitle, bookPageCount) {
  var bookPages = bookTitle.length * 20
return bookPages
};

writeBook
function writeBook(bookTitle, bookCharacter, pageCount, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: pageCount,
    genre: genre
  };
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
