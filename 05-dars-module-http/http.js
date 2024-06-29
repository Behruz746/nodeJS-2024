const http = require("http");
const PORT = 8000;

// server saqlovchisiga http module methodi createServer() orqali server yaratish
// 1 request - serverga berilgan savol
// 2 response - serverdan qaytgan javob
const server = http.createServer((request, response) => {
  console.log(request.url);

  // page htmlga malumot chiqarish
  response.write(`<h1 style="color: yellowgreen;">Hello World</h1>`);

  // serverda barcha functionlar bajarilgan dan so'ng end() methodin ichaqirish kerak
  // chaqirilmasa server takroriy ravishda functionlarni qayta qayta bajaradi
  response.end();
});

// serverni kuzatish uchun listen methodi
// 1 PORT - 8000
// 2 callBack function server isga tushganin bildirish uchun
server.listen(PORT, () => {
  console.log(
    `server is runing with port: ${PORT} server: http://localhost:8000/`
  );
});
