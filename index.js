import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDb } from "./db/connection.js";
import { login } from "./routes/login.route.js";
import { signup } from "./routes/signup.route.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Enable cors from any location
app.use(cors());
// Define route handlers
app.use("/login", login);
app.use("/signup", signup);

try {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await connectToDb(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
} catch (err) {
    console.log(err);
}

const server = app.listen(process.env.PORT, () =>
    console.log(
        `Server is running on: ${server.address().address}:${
            server.address().port
        }`
    )
);

export default server;
