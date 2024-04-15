//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorMap = {
  black : 0,
  brown : 1,
  red : 2,
  orange : 3,
  yellow : 4,
  green : 5,
  blue :6 ,
  violet : 7,
  grey : 8,
  white : 9

}
  


export const decodedValue = (colorArr) => {
  let colorCode = `${colorMap[colorArr[0]]}` + `${colorMap[colorArr[1]]}`
  
  
  return parseFloat(colorCode)
};
