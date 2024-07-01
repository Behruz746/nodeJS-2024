const getArgs = require("./helpers/args");

// startCLI function
const startCLI = () => {
  // getArgs dan qaytgan object malumotlarini args saqlovchisiga olish
  // getArgs argumentiga process.argv beramiz bu terminaldan keladigan commandalar bo'ladi
  const args = getArgs(process.argv);

  console.log(args);

  // agarda args objdagi h propertysi true bolsa termilarga Help functioni ishlaydi
  if (args.h) {
    console.log("help");
  }

  // agarda args objdagi s propertysi true bo'lsa berilgan city saqlanadi
  if (args.s) {
    console.log("save city");
  }

  // agarda args objdagi t propertysi true bo'lsa berilgan token saqlanadi
  if (args.t) {
    console.log("save token");
  }

  // result
};

startCLI();
