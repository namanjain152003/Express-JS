import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log("=== DEBUG INFO ===");
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  console.log("req.body:", req.body);
  console.log("typeof req.body:", typeof req.body);
  console.log("req.body is undefined:", req.body === undefined);
  console.log("req.body is null:", req.body === null);
  
  // Only process if req.body exists and has the required fields
  if (req.body && req.body.street !== undefined && req.body.pet !== undefined) {
    bandName = req.body["street"] + req.body["pet"];
    console.log("Generated band name:", bandName);
  } else {
    console.log("Skipping band name generation - no form data");
  }
  
  console.log("==================");
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});