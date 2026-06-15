function convertToOldRoman(n) {
  const values = [
     [1000, "M"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
    [10, "X"],
    [5, "V"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, numeral] of values) {
    while (n >= value) {
      result += numeral;
      n -= value;
    }
  }

  return result;
}

module.exports = convertToOldRoman;