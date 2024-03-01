// import express from "express";
// const app = express();

// const PORT = 4000;

// app.get("/", (req, res) => res.end(`Hello from a  ${req.method} request`));

// app.post("/", (req, res) => res.end(`Hello from a  ${req.method} request`));

// app.post("/add", (req, res) => res.end(`Hello from a  ${req.method} request to ${req.url}`));

// const server = app.listen(PORT, () => {
//   const SERVERHOST = server.address().address;
//   const SERVERPORT = server.address().port;
//   console.log(`Server listening on http://${SERVERHOST}:${SERVERPORT}`);
// })

import express from "express";
import { config } from "dotenv";
import { connectToDb } from "./db/connection.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.get("/", (req, res) => res.end(`Hello from a  ${req.method} request`));

try {
  console.log(`Connecting to MongoDB @ ${process.env.DB_URI}`);
  await connectToDb(process.env.DB_URI);
  console.log(`Connected to MongoDB @ ${process.env.DB_URI}`);
} catch (err) {
  console.error(err);
}

app.listen(process.env.PORT, () =>
  console.log(`Server is running on: ${process.env.PORT}`)
);
