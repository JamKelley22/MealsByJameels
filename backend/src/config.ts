import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import mysql from "mysql";
import cors from "cors";

import * as Const from "./constants";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

const connection = mysql.createConnection({
  host: Const.DB_HOST,
  port: Const.DB_PORT,
  user: Const.DB_USER,
  password: Const.DB_PASS,
  database: Const.DB_NAME,
});

export { app as config, connection };
