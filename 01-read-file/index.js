const fs = require("fs");
const path = require("path");

const file = path.dirname.join(__filename, "text.txt");
const stream = fs.createReadStream(file, "utf-8");

let data = "";

stream.on("data", (chunk) => console.log(data += chunk));
