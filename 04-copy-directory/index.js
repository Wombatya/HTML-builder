const fs = require("fs");
const path = require("path");

const initial = path.join(__dirname, "files");
let final = path.join(__dirname, "files-copy");

function copyDir() {
    fs.mkdir(final, { recursive: true }, () => {});
    fs.readdir(final, (error, files) => { 
        if (error) {
            console.log(error);
        } 
        else {
            files.forEach((file) => {
                fs.unlink(path.join(final, file), (error) => {
                    if(error) {
                        console.log(error);
                    }
                });
            });
        }
    });
    fs.readdir(initial, {withFileTypes: true}, (error, files) => { 
        if (error) {
            console.log(error);
        } 
        else {
            files.forEach((file) => {
                fs.copyFile(path.join(initial, file.name), path.join(final, file.name), (error) => {
                    if (error) {
                        console.log(error);
                    };
                });
            });
        }
    });
};
copyDir();
