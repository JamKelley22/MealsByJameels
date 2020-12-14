import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Wrist } from "./types";

const app = express();

const baseEndpoint = "/wrist";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("wrist", Wrist);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const WristId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("wrist", WristId, Wrist);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await create(
      "wrist",
      new Wrist(req.body).getObjectWithTransformedMoments(),
      Wrist
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("wrist", Wrist);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const WristId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("wrist", WristId, Wrist);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const WristId = Number(req.params.id);
  let ret;
  try {
    ret = await updateById(
      "wrist",
      WristId,
      new Wrist(req.body).getObjectWithTransformedMoments(),
      Wrist
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as wrist };
