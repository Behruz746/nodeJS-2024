const http = require("http");
// server porti
let PORT = 8000;

// server yaratish
const server = http.createServer((request, respons) => {
  // request - serverga so'rov
  // respons - server javobi

  console.log(request.url); // server page url

  // server dna javob
  respons.write("<h1>Hello World</h1>");
  // serverdan javob kelsa stop qilish
  respons.end();
});

// serverga port beradi
server.listen(PORT, () => {
  console.log(`server ishga tushi port: ${PORT}, link: http://localhost:8000/`);
});
