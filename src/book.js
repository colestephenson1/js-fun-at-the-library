
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
function calculatePageCount(bookTitle) {
  var bookPages = bookTitle.length * 20
return bookPages
};

//writeBook
function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
};

//editBook

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75
return bookTitle.pageCount
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
