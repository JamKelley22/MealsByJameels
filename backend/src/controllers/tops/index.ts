import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Top } from "./types";

const app = express();

const baseEndpoint = "/top";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("tops", Top);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const topId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("tops", topId, Top);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await create(
      "tops",
      new Top(req.body).getObjectWithTransformedMoments(),
      Top
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("tops", Top);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const topId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("tops", topId, Top);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const topId = Number(req.params.id);
  let ret;
  try {
    ret = await updateById(
      "tops",
      topId,
      new Top(req.body).getObjectWithTransformedMoments(),
      Top
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as tops };
