const add = require("./calculator");

// Step 1: simplest thing
test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns that number", () => {
  expect(add("5")).toBe(5);
});

test("two numbers returns their sum", () => {
  expect(add("3,6")).toBe(9);
});

// Step 2: unknown amount of numbers
test("handles multiple numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

// Step 3: ignore big numbers
test("numbers bigger than 1000 are ignored", () => {
  expect(add("2,1001")).toBe(2);
});

test("1000 is not ignored", () => {
  expect(add("2,1000")).toBe(1002);
});

// Step 4: negative numbers
test("throws error for negative numbers", () => {
  expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
});

test("throws error showing all negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
});