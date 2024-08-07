import {
  printErr,
  printSucc,
  printHelp,
  printWeather,
} from "./service/log.service.js";
import { getKeyValue, saveKeyValue } from "./service/storage.service.js";
import getArgs from "./helpers/args.js";
import { TOKEN_DICTIONARY } from "./service/storage.service.js";
import { getWeather, getIcon } from "./service/api.service.js";

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

const saveCity = async (city) => {
  if (!city.length) {
    printErr("City doesn't extist");
    return;
  }

  try {
    // agar xato bolmasa saveKeyValue functionga tokenlarni beramiz
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSucc("City was saved");
    // agar xato bolsa terminalga xato deb chiqaramiz
  } catch (error) {
    printErr(error.message);
  }
};

// serverdan malumot olyotganda xato kelta xatoturini consolega chiqarish xato bolmasa kelgan malumotni chiqarish
const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const res = await getWeather(city);
    printWeather(res, getIcon(res.weather[0].icon));
  } catch (error) {
    if (error?.response?.status == 404) {
      printErr("City not found");
    } else if (error?.response?.status == 401) {
      printErr("Invalid token");
    } else {
      printErr(error?.message);
    }
  }
};

// startCLI function
const startCLI = () => {
  // getArgs dan qaytgan object malumotlarini args saqlovchisiga olish
  // getArgs argumentiga process.argv beramiz bu terminaldan keladigan commandalar bo'ladi
  const args = getArgs(process.argv);

  // agarda args objdagi h propertysi true bolsa termilarga Help functioni ishlaydi
  if (args.h) printHelp();

  // agarda args objdagi s propertysi true bo'lsa berilgan city saqlanadi
  if (args.s) saveCity(args.s);

  // agarda args objdagi t propertysi true bo'lsa berilgan token saqlanadi
  // tokeni o'zgartirish
  if (args.t) saveToken(args.t);

  getForcast();
  // result
};

startCLI();
