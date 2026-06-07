let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];
  const output = removeVowelsFromWords(input);
  expect(output).toEqual(expected);
});
test("returns empty array if input is empty array", function () {
  const input = [];
  const expected = [];
  const output = removeVowelsFromWords(input);
  expect(output).toEqual(expected);
});

test("removes all vowels from a single word", function () {
  const input = ["hello"];
  const expected = ["hll"];
  const output = removeVowelsFromWords(input);
  expect(output).toEqual(expected);
});
// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
