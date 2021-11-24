const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: path.resolve("./", "src", "assets", "images") });

app.post("/", upload.single("file"), (req, res) => {
  return res.send(req.file.filename);
});

app.listen(3001, () => console.log("Server started on http://localhost:3001"));
