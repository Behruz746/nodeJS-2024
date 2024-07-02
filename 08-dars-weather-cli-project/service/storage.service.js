import os from "os";
import path from "path";
import fs from "fs";

// weather malumotlarini saqlash uchun file pathi
const filePath = path.join(os.homedir(), "weather-data.json");

const saveKeyValue = async (key, value) => {
  // hamma malumotlar datag kelib tushadi
  let data = {};

  // agar file oldin yaratilgan bo'lsa
  if (await isExist(filePath)) {
    // yaratilgan fileni o'qib ichidagi malumtni
    const file = await fs.promises.readFile(filePath);
    // data saqlochisiga parse qilib olamiz
    data = JSON.parse(file);
  }

  // data ga function parametoridagi key ga obj key qilamiz valugani esa key valuesi
  data[key] = value;
  // va weather-data.json degan json file yaratib data saqlochisini malumot sifatisa beramiz
  await fs.promises.writeFile(filePath, JSON.stringify(data));
};

// bu function weather-data.json file dan berilgan malumotlarni olibberadi
const getKeyValue = async (key) => {
  // agar oldin file yaratilgan bo'lsa
  if (await isExist(filePath)) {
    // o'sha fileni malumotlarini olib
    const file = await fs.promises.readFile(filePath);
    // data saqlovchisiga parse qilamiz
    const data = JSON.parse(file);
    // va data objni keyiga key sifatida funtion parametorini beramiz key
    // malumotni return qilamiz
    return data[key];
  }

  // agar file bo'lmasa hechnarsa qaytmaydi
  return undefined;
};

// bu funtion bironbir file bormi yoqmi tekshiradi
// file pathi orqali
const isExist = async (path) => {
  // agar bor bo'lsa true
  try {
    await fs.promises.stat(path);
    return true;
    // yo'q bo'lsa false
  } catch (error) {
    return false;
  }
};

export { saveKeyValue, getKeyValue };
