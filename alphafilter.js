const fs = require("fs");

const contenu = fs.readFileSync("dico3.txt", "utf8");
console.log(contenu);