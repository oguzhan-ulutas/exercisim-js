// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""))
  const num2 = Number(array2.join(""))
  console.log(array1.join(""))

  return num1+num2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedValue = Number(String(value).split("").reverse().join(""))
  return value === reversedValue ? true : false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  if (!input) {
    return 'Required field';
  }else {
    return Number(input) ? '' : 'Must be a number besides 0';
  } 
  
}
