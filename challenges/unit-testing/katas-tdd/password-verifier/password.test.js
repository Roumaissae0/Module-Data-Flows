const verify = require("./password");

// Step 1: less than 8 characters
test("password less than 8 characters is rejected", () => {
  expect(verify("abc")).toBe("Password rejected");
});

test("password with 8 characters is accepted", () => {
  expect(verify("Abcdef1!")).toBe("Password accepted");
});

// Step 2: null password
test("null password is rejected", () => {
  expect(verify(null)).toBe("Password rejected");
});

// Step 3: no uppercase letter
test("password without uppercase letter is rejected", () => {
  expect(verify("abcdef1!")).toBe("Password rejected");
});

test("password with uppercase letter is accepted", () => {
  expect(verify("Abcdef1!")).toBe("Password accepted");
});

// Step 4: no number
test("password without a number is rejected", () => {
  expect(verify("Abcdefgh!")).toBe("Password rejected");
});

test("password with a number is accepted", () => {
  expect(verify("Abcdef1!")).toBe("Password accepted");
});