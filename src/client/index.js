// saveCursor :: {} -> {}
// saveCursor = () => IO.put("\x1b[s")

// restoreCursor :: {} -> {}
// restoreCursor = () => IO.put("\x1b[u")

// process.stdout.write("\u001b[0J");
console.log("Hello");
process.stdout.write("\x1b7");
console.log("typin");
process.stdout.write("\x1b8");
console.log("new message");
process.stdout.write("\x1b7");
console.log("typin");
// console.log("hallo");

var readline = require("readline");

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (chunk, key) => {
  console.log(key);
  if (key && key.name == "q") process.exit();
});
