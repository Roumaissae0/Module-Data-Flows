// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 2. Make supplies for our speech bubble
const topLine = "_";
const bottomLine = "-";
// 3. Make a cow that takes a string

const cow = (saying) => {
    // how did you make the cow before?
  const text = saying.trim() || "Mooooo";
  const border = topLine.repeat(text.length + 2);
  const bottom = bottomLine.repeat(text.length + 2);

  return `
 ${border}
< ${text} >
 ${bottom}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
};

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question("What should the cow say? ", (answer) => {
  console.log(cow(answer));
  rl.close();
});