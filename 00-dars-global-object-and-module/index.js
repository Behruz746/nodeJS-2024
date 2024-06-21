const { user, userLogger } = require("./user");
const { car, carLogger } = require("./car");

console.log(user, car);
userLogger();
carLogger();

// console.log("Hello NodeJS");
// console.log("__dirname: ", __dirname);
// console.log("__filename: ", __filename);
