import { printErr, printSucc, printHelp } from "./service/log.service.js";
import { saveKeyValue } from "./service/storage.service.js";
import getArgs from "./helpers/args.js";

const saveToken = async (token) => {
  // agar xato bolmasa saveKeyValue functionga tokenlarni beramiz
  try {
    await saveKeyValue("token", token);
    printSucc("Token was saved");
    // agar xato bolsa terminalga xato deb chiqaramiz
  } catch (error) {
    printErr(error.message);
  }
};

// startCLI function
const startCLI = () => {
  // getArgs dan qaytgan object malumotlarini args saqlovchisiga olish
  // getArgs argumentiga process.argv beramiz bu terminaldan keladigan commandalar bo'ladi
  const args = getArgs(process.argv);

  console.log(args);

  // agarda args objdagi h propertysi true bolsa termilarga Help functioni ishlaydi
  if (args.h) printHelp();

  // agarda args objdagi s propertysi true bo'lsa berilgan city saqlanadi
  if (args.s) {
    console.log("save city");
  }

  // agarda args objdagi t propertysi true bo'lsa berilgan token saqlanadi
  if (args.t) {
    // tokeni o'zgartirish
    return saveToken(args.t);
  }

  // result
};

startCLI();
