const Events = require("events");
const fs = require("fs");

// Logger classiga extends yani voris sifatida Eventsni olish
// voris bolganidan song Events dagi barcha methodlar Loggerga ham otadi
class Logger extends Events {
  // Logger ichida function yaratish
  log(a, b) {
    // emit() agar log ishga tushsa emitdagi malumotni ko'rsatadi
    // function ichida emit eventini qilish va nome berish "calculate" yana eventga funtion yozish yani "a + b"
    this.emit("calculate", a + b);
  }
}

// Logger classini logger saqlovchisiga exemplat qilib olish
const logger = new Logger();

// logger orqali on() methodini chaqirish
// on() methodi ishituvchi uni ichga emit() nomi yani "calculate" va callback function malumotlarni ko'rsatish uchun
logger.on("calculate", (data) => {
  console.log(data);
});

// class ichidagi logni ishga tushirib beradi
// ! hardoim class functioni class on dan kegin yozish kerak
logger.log(1, 99);

// file o'qish eventi
const myEmitter = new Events();

myEmitter.on("fileRead", (data) => {
  console.log("Fayl o'qildi:", data);
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw new Error();
  myEmitter.emit("fileRead", data);
});
