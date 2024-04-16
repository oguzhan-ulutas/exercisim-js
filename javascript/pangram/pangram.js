//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const isPangram = (str) => {
  const string = str.toLowerCase()
  let letters = ""

  for (const char of alphabet) {
    
    
    if (string.includes(char)){
      letters += char

      if (letters === alphabet) {
        return true
      }

      continue
    } else return false

  }
  
};
