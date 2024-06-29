const fs = require("fs");
const path = require("path");

// fs.mkdir(); // async
// fs.mkdirSync(); // sync

// fs dan mkdir() methodi orqali folder yaratish
// fs.mkdir(path.join(__dirname, "tempalates"), (err) => {
//   if (err) throw new Error();

//   console.log("folder was create successfully");
// });

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();
//   console.log("folder was create successfully");
// });

let textFileData = `Asinxron va Sinxron Usullar. \n`;
let textFileApp = `Asinxron usullar: Bu usullar callback funksiyalari orqali ishlaydi. Bu usullar bloklanmaydi, ya'ni Node.js boshqa kodlarni bajarishda davom etadi.`;

// create folder
fs.mkdir(path.join(__dirname, "notes"), { recursive: true }, (err) => {
  if (err) throw err;
});

// file yaratish va ichiga malumot kirgazish
fs.writeFile(
  path.join(__dirname, "notes", "december.txt"),
  textFileData,
  (err) => {
    console.log(err);
    if (err) throw new Error();

    console.log("file was create successfully)");

    // filega text qo'shish
    fs.appendFile(
      path.join(__dirname, "notes", "december.txt"),
      textFileApp,
      (err) => {
        if (err) throw new Error();

        console.log("file was append successfully");

        // fileni ichidagi malumotni o'qish
        fs.readFile(
          path.join(__dirname, "notes", "december.txt"), "utf-8",
          (err, data) => {
            if (err) throw new Error();

            console.log(Buffer.from(data).toString()); // Buffer malumotni string malumotga ogrish
          }
        );
      }
    );
  }
);
