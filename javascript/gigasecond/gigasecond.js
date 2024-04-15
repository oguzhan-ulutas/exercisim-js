//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

  // date to seconds
  const timestamp = date.getTime()

  const gs = Math.floor(timestamp+1000000000000)

  const newDate = new Date(gs)

  return newDate
  
};
