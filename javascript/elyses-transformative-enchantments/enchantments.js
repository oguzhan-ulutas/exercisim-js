// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubleDeck = deck.map(element => element * 2)

  return doubleDeck
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const newDeck = []
  for (let index in deck) {
    newDeck.push(deck[index])
    if (deck[index] === 3) {
      newDeck.push(3)
      newDeck.push(3)
    }
  }

  return newDeck
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const newDeck = [deck[4], deck[5]]

  return newDeck
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const middleIndex = (deck.length / 2)
  const firstItem = deck[0]
  const lastItem = deck[deck.length - 1]
  const newDeck = []

  if (middleIndex === 1) {
    newDeck.push(lastItem)
      newDeck.push(firstItem)
  }

  for (let index = 1 ; index < deck.length - 1; index++) {

    if (index === middleIndex) {
      newDeck.push(lastItem)
      newDeck.push(firstItem)
      
    }

    newDeck.push(deck[index])

  }
  
  return newDeck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
 const newDeck = deck.filter(item => item === 2)

  return newDeck
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
 const newDeck = deck.sort((a,b)=>a-b)

 return newDeck
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  
  return deck.reverse()
}
