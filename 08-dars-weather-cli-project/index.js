import { printErr, printSucc, printHelp } from "./service/log.service.js";
import { saveKeyValue } from "./service/storage.service.js";
import getArgs from "./helpers/args.js";
import { TOKEN_DICTIONARY } from "./service/storage.service.js";
import { getWeather } from "./service/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printErr("Token doesn't extist");
    return;
  }

  try {
    // agar xato bolmasa saveKeyValue functionga tokenlarni beramiz
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
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

  console.log(process.env);
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

  getWeather(process.env.CITY ?? "uzun");
  // result
};

startCLI();
