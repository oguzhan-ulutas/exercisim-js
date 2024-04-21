//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  const pascalTriangle = [];

  for (let i = 0; i < numRows; i++) {
    const newRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        newRow.push(1);
      } else {
        const newElement = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        newRow.push(newElement);
      }
    }
    pascalTriangle.push(newRow);
  }

  return pascalTriangle;
};
