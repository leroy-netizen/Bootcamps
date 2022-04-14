import express from "express";
import dotenv from "dotenv";

// load env vars

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 8000;

// -------------routes-------------

//`````POST``````
app.post("/api/v1/bootcamps/:id", (req, res) => {
  res.json({ success: true, message: "create a bootcamp" });
});

//`````GET``````
app.get("/api/v1/bootcamps", (req, res) => {
  res.json({ success: true, message: "get all bootcamps" });
});

// get a single bootcamp
app.get("/api/v1/bootcamps/:id", (req, res) => {
  res.json({
    success: true,
    message: `get a single bootcamp ${req.params.id}`,
  });
});

//`````update{PUT}``````
app.put("/api/v1/bootcamps/:id", (req, res) => {
  res.json({ success: true, message: `update a bootcamp ${req.params.id}` });
});

//`````DELETE``````
app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res.json({ success: true, message: `delete a bootcamp ${req.params.id}` });
});

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
