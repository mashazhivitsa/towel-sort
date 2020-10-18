
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  if (Array.isArray(matrix) && matrix.length !== 0) {

    let sorted = [];
  
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        sorted.push(matrix[i].reverse());
      } else {
        sorted.push(matrix[i]);
      }
    }
    return sorted.flat();
  } 
    return [];
}
