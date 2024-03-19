import { response } from "express";
import { PageModel } from "../models";

export const getPages = async (req, res = response) => {
  try {
    let pages = await PageModel.find();
    res.json({
      ok: true,
      data: pages,
    });
  } catch (error) {
    console.log({ error });
    res
      .status(500)
      .json({ ok: false, msg: "Hubo un error al obtener las pages" });
  }
};
