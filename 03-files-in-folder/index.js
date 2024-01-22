const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "secret-folder"); 

fs.readdir(folder, {withFileTypes: true}, (error, files) => {
if (error) {
    console.log(error); 
}
else { 
    files.forEach((file) => {
        if (file.isFile()) {
            const extension = path.extname(file.name);
            const name = file.name.replace(`${extension}`, "");
            fs.stat(path.join(folder, file.name), (error, stats) => {
                if (error) {
                    console.log(error)
                };
                console.log(`${name} - ${extension} - ${stats.size}b`);
            });
}
});
}
});