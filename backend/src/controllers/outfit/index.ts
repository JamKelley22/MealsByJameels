import express from "express";

import {
  getAll,
  getById,
  create,
  deleteAll,
  deleteById,
  updateById,
} from "../../engine";
import { Outfit } from "./types";

const app = express();

const baseEndpoint = "/outfit";

app.get(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await getAll("outfit", Outfit);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.get(`${baseEndpoint}/:id`, async (req, res) => {
  const outfitId = Number(req.params.id);
  let ret;
  try {
    ret = await getById("outfit", outfitId, Outfit);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.post(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await create(
      "outfit",
      new Outfit(req.body).getObjectWithTransformedMoments(),
      Outfit
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}`, async (req, res) => {
  let ret;
  try {
    ret = await deleteAll("outfit", Outfit);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.delete(`${baseEndpoint}/:id`, async (req, res) => {
  const outfitId = Number(req.params.id);
  let ret;
  try {
    ret = await deleteById("outfit", outfitId, Outfit);
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

app.put(`${baseEndpoint}/:id`, async (req, res) => {
  const outfitId = Number(req.params.id);
  let ret;
  try {
    ret = await updateById(
      "outfit",
      outfitId,
      new Outfit(req.body).getObjectWithTransformedMoments(),
      Outfit
    );
  } catch (e) {
    ret = e;
  }
  res.json(ret);
});

export { app as outfits };
