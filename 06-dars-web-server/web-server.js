const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(request.method);

  if (request.method === "GET") {
    // yozayotgam malumotimiz qanday turligini yozish text/html
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    response.end(`
        <h1>Send Name</h1>
        <form method="post" action="/">
            <input name="name" type="text" />
            <button type="submit">Submit</button>
        </form>
    `);
  } else if (request.method === "POST") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const body = [];

    // kelgan email malumotini qabulqilish olish
    request.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    // malumotni olgandan so'ng uni ko'rsatish
    request.on("end", () => {
      const message = body.toString().split("=")[1];
      console.log(body);
      console.log(message);
      response.end(`<h1>Name successfully added: ${message}</h1>`);
    });
  }
});

server.listen(PORT, () => {
  console.log(`server is runing PORT: ${PORT}, server: http://localhost:3000/`);
});
