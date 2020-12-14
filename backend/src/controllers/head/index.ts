import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Head } from "./types";

const app = express();

const baseEndpoint = "/head";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("head", Head);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const HeadId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("head", HeadId, Head);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await create(
      "head",
      new Head(req.body).getObjectWithTransformedMoments(),
      Head
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("head", Head);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const HeadId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("head", HeadId, Head);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const HeadId = Number(req.params.id);
  let ret;
  try {
    ret = await updateById(
      "head",
      HeadId,
      new Head(req.body).getObjectWithTransformedMoments(),
      Head
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as head };
