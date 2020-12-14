require("dotenv").config(); // eslint-disable-line
import errorHandler from "errorhandler";
import express from "express";
import https from "https";
import fs from "fs";

import { config, connection } from "./config";
import * as Const from "./constants";

import { bottoms } from "./controllers/bottoms";
import { feet } from "./controllers/feet";
import { head } from "./controllers/head";
import { outfits } from "./controllers/outfit";
import { tops } from "./controllers/tops";
import { wrist } from "./controllers/wrist";

// import { DEBUG } from "util/util";

const app = express();

app.use(config);
app.use(bottoms);
app.use(feet);
app.use(head);
app.use(outfits);
app.use(tops);
app.use(wrist);

if (app.get("env") === "development") {
  //   DEBUG(true);

  const DEV_PORT = 4000;
  app.use(errorHandler());
  app.listen(DEV_PORT);
  console.log(`Running a DEV API server at http://localhost:${DEV_PORT}`); // eslint-disable-line
} else {
  //   DEBUG(false);
  const key = fs.readFileSync(`${Const.CERT_DIR}/privkey.pem`);
  const cert = fs.readFileSync(`${Const.CERT_DIR}/cert.pem`);
  const options = {
    key: key,
    cert: cert,
  };
  const server = https.createServer(options, app);
  server.listen(Const.PORT, () => {
    console.log("Server starting on port: " + Const.PORT); // eslint-disable-line
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
