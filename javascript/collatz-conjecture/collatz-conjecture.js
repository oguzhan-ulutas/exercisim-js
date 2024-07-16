//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  console.log(Boolean(-15))
  if (parseInt(number) < 1) throw new Error('Only positive numbers are allowed');

  let steps = 0

  while (number !== 1 && steps < 200) {
    if (number%2 === 0){
      number = number / 2
    }else {
      number = (3*number) + 1
    }

    steps++
  }

  return steps
};
