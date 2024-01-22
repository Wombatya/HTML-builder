const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process; 

const file = path.join(__dirname, "text.txt");
const output = fs.createWriteStream(file);

stdout.write("Write your text here: ");
stdin.on("data", (chunk) => {
  if (chunk.toString().includes('exit')) process.exit();
  output.write(chunk);
});

process.on("exit", () => stdout.write("Thank you! Good bye"));
process.on("SIGINT", () => process.exit());