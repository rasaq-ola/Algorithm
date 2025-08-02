function generate(numRows) {
  const triangle = [];

  for (let row = 0; row < numRows; row++) {
    const newRow = [];

    for (let col = 0; col <= row; col++) {
      // First and last elements are always 1
      if (col === 0 || col === row) {
        newRow.push(1);
      } else {
        // Middle values are sum of two values from the row above
        const val = triangle[row - 1][col - 1] + triangle[row - 1][col];
        newRow.push(val);
      }
    }

    triangle.push(newRow);
  }

  return triangle;
}
