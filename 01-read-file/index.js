const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "text.txt");
const stream = fs.createReadStream(file, "utf-8");

let data = "";

stream.on("data", (chunk) => console.log(data += chunk));
