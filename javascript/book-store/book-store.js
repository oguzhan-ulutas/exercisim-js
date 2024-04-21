//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const bookPrize = 800
const discounts = {
  one: 1,
  two: 0.95,
  three: 0.90,
  four: 0.80,
  five: 0.75,
};


export const cost = (books) => {
  const bookCount = books.length
  const bookCount = [0, 0, 0, 0, 0]
  const discountRate = 0

  // Getting the count of each book type
  books.forEach(book => {
    bookCount[book - 1]++
  })

  // Maximize 5 different type
  for (let i = 0; i < bookCount; i++) {
    
  }


};
