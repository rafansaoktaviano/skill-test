import { NextFunction, Request, Response } from "express";
import db from "../config/config";

import countService from "../services/countService";

const totalCountOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const totalCountProductLine = await countService.countProductLine()

    res.status(200).send({
      isError: false,
      data: totalCountProductLine,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  totalCountOrder,
};
