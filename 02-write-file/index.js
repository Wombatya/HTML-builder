const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process; 

const file = path.dirname(__filename) + \\text.txt;
const output = fs.createWriteStream(file);

process.on("exit", () => stdout.write("Thank you! Good bye"));

stdout.write("Write your text here: ");
stdin.on("data", (chunk) => {
  if (chunk.toString().includes('exit')) process.exit();
  output.write(chunk);
