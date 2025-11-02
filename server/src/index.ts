import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

pool.query("SELECT NOW()", (err: Error | null, res: any) => {
  if (err) console.error("Database connection error::", err);
  else console.log("Database connection successful!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
