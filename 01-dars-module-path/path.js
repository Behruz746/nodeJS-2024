const path = require("path");

// console.log(path.basename(__filename)); // "fileni o'zini olib beradi"
// console.log(path.basename(__filename, ".js")); // "file kengaytmasini olib tashlaydi"
// console.log(path.dirname(__filename)); // "fileni ona papkasini olib beradi"
// console.log(path.extname(__filename)); // "fileni kengaytmasini korsatib beradi yani ".js""

// console.log(path.basename(__dirname)); // "papkani o'zini oliberadi __dirname"
// console.log(path.dirname(__dirname)); // "korsatilgan papgani ona papkasini oliberadi"
// console.log(path.extname(__dirname)); // "hechnarsa qaytarmaydi chunki papkani kengaymasi yo'q

// console.log(path.parse(__filename));
// console.log(path.join(__dirname, "template", "index.html")); // "filelarni yolarini dinamik tarzda birlashtiradi"
// console.log(path.resolve(__dirname, "temp", "index.js")); // "bu mathod ham join() ni o'zi lekin bu methodda root qilib fileni o'zini bersa bo'ladi"
// console.log(path.resolve(__dirname, "temp", "/index.js")); // "ROOT"

const testPath = path.join(__dirname, "temp", "index.scss");
console.log(path.parse(testPath));
