//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  const factors = []

  if (num === 1) {
    return factors
  }

  let divider = 2

  while (num > 1) {

    if (num % divider === 0) {
      num = num / divider
      factors.push(divider)
      continue
    }
    
    divider++


  }

  return factors
};
