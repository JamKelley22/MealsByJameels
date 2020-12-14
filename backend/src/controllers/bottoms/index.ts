import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Bottom } from "./types";

const app = express();

const baseEndpoint = "/bottom";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("bottoms", Bottom);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const BottomId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("bottoms", BottomId, Bottom);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  const simpleBottoms = new Bottom(req.body).getObjectWithTransformedMoments();

  try {
    ret = await create("bottoms", simpleBottoms, Bottom);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("bottoms", Bottom);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const BottomId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("bottoms", BottomId, Bottom);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const BottomId = Number(req.params.id);

  let ret;
  try {
    ret = await updateById(
      "bottoms",
      BottomId,
      new Bottom(req.body).getObjectWithTransformedMoments(),
      Bottom
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as bottoms };
