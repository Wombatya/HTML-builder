const fs = require("fs");
const path = require("path");

const projectDist = path.join(__dirname, 'project-dist');

const template = path.join(__dirname, 'template.html');
const components = path.join(__dirname, 'components');

fs.mkdir(projectDist, { recursive: true }, () => {});

