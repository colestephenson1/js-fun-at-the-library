function createTitle(bookIdea) {
return `The ${bookIdea}`
};


function buildMainCharacter(name, age, pronouns) {
return {
  name: name,
  age: age,
  pronouns: pronouns
};
};

function saveReview(reviews, movieRevs) {
return movieRevs.push(reviews)

};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
