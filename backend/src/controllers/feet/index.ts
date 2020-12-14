import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Feet } from "./types";

const app = express();

const baseEndpoint = "/feet";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("feet", Feet);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const FeetId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("feet", FeetId, Feet);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await create(
      "feet",
      new Feet(req.body).getObjectWithTransformedMoments(),
      Feet
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("feet", Feet);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const FeetId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("feet", FeetId, Feet);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const FeetId = Number(req.params.id);
  let ret;
  try {
    ret = await updateById(
      "feet",
      FeetId,
      new Feet(req.body).getObjectWithTransformedMoments(),
      Feet
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as feet };
