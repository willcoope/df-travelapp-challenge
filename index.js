// import http from "http";

// const PORT = 4000;

// const HOST = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   console.log(req.url);
//   if (req.method === "POST" && req.url === `/add`) {
//     res.end(`POST request to ${req.url} received`);
//   } else {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         data: "Hello World",
//       })
//     );
//   }
// });

// server.listen(PORT, HOST, () =>
//   console.log(`Server listening on http://${HOST}:${PORT}`)
// );

import express from "express";
const app = express();

const PORT = 4000;

app.get("/", (req, res) => res.end(`Hello from a  ${req.method} request`));

app.post("/", (req, res) => res.end(`Hello from a  ${req.method} request`));

app.post("/add", (req, res) => res.end(`Hello from a  ${req.method} request to ${req.url}`));

const server = app.listen(PORT, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Server listening on http://${SERVERHOST}:${SERVERPORT}`);
})
