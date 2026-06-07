let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toBe("I");
});

test("returns III if passed 3 as an argument", function () {
  expect(convertToOldRoman(3)).toBe("III");
});

test("returns IIII if passed 4 as an argument", function () {
  expect(convertToOldRoman(4)).toBe("IIII");
});

test("returns V if passed 5 as an argument", function () {
  expect(convertToOldRoman(5)).toBe("V");
});

test("returns VII if passed 7 as an argument", function () {
  expect(convertToOldRoman(7)).toBe("VII");
});

test("returns XV if passed 15 as an argument", function () {
  expect(convertToOldRoman(15)).toBe("XV");
});

test("returns XVIII if passed 18 as an argument", function () {
  expect(convertToOldRoman(18)).toBe("XVIII");
});

test("returns XXII if passed 22 as an argument", function () {
  expect(convertToOldRoman(22)).toBe("XXII");
});

test("returns M if passed 1000 as an argument", function () {
  expect(convertToOldRoman(1000)).toBe("M");
});

test("returns MMM if passed 3000 as an argument", function () {
  expect(convertToOldRoman(3000)).toBe("MMM");
});