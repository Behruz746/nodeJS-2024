const Events = require("events"); // events
const fs = require("fs"); // file systems

// Event  Logger classga voris bo'ladi Eventsdagi methodlar Loggerga o'tadi
class Logger extends Events {
  log(a, b) {
    // Events dan emit() methodini oldik
    // 1 'calc' emit() methodini nomi
    // 2 hodisa a va b qo'shilishi
    this.emit("calc", a + b);
  }
}

// Logger class logger saqlovchiga vorish bo'ladi va Logger methodlari kelib tushadi
const logger = new Logger();

// logger dan on() methodini yozdik bu method kuzatadi funtion ishlashini
// 1 ishlashi kerak bo'lgan method nomi bizning holda emit() dagi "calc"
// 2 callback function va data ichida emit() dan malumot keladi
logger.on("calc", (data) => {
  console.log(data);
});

// functioni ishga tushurish va functionga parametorlar berish
logger.log(1, 99);

// myEmitter saqlovchisi Eventsga voris bolyapti va
//  hamma methodlarini o'zlashtiryapti
const myEmitter = new Events();

//
myEmitter.on("fileRead", (data) => {
  console.log("Fayl o'qildi:", data);
});

// fs module orqali fileni readFile qilyapmiz yani fileni o'qiyapmiz
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw new Error();
  // file malumotlarini myEmitter saqlovchisidagi emit
  // methodi orqali on methoga beryapmiz va consolga file data chiqyapti
  myEmitter.emit("fileRead", data);
});
