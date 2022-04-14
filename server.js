import express from "express";
import dotenv from "dotenv";

// load env vars

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
