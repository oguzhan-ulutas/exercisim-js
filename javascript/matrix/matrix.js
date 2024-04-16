//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrix = matrixString.split("\n").map(item=>item.split(" ").map(item=>Number(item)))
    
    
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    const rows = this.matrix.length;
    const cols = this.matrix[0].length;
    const transposedMatrix = Array.from({ length: cols }, () => Array(rows));

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        transposedMatrix[i][j] = this.matrix[j][i];
      }
    }
    return transposedMatrix;
  }
}
