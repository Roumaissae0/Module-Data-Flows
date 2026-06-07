let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  const input = [3, 21, 88, 4, 36];
  const expected = 88;
  const output = getLargestNumber(input);
  expect(output).toEqual(expected);
});
test("returns largest number in array with negative numbers", function () {
  const input = [-3, -21, -1, -4, -36];
  const expected = -1;
  const output = getLargestNumber(input);
  expect(output).toEqual(expected);
});

test("returns the only number if array has one element", function () {
  const input = [5];
  const expected = 5;
  const output = getLargestNumber(input);
  expect(output).toEqual(expected);
});

test("original array is not changed", function () {
  const input = [3, 21, 88, 4, 36];
  const copy = [...input];
  getLargestNumber(input);
  expect(input).toEqual(copy);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
