import http from "http";

const PORT = 4000;

const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.method === "POST" && req.url === `/add`) {
    res.end(`POST request to ${req.url} received`);
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World",
      })
    );
  }
});

server.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
