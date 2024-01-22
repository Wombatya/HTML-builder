const { error } = require("console");
const fs = require("fs");
const path = require("path");

const initial = path.join(__dirname, "styles");
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const write = fs.createWriteStream(bundle);

fs.readdir(initial, { withFileTypes: true }, (error, files) => {
    if (error) {
        console.log(error);
    }
    else {
        files.forEach((file) => {
            if (file.isFile() && path.extname(file.name) === ".css") {
                const read = fs.createReadStream(path.join(initial, file.name), "utf-8");
                read.pipe(write);
            }
        })
    }
})