import { NextFunction, Request, Response } from "express";
import { CustomError } from "../classes/errors/CustomError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }

  // Defaulting to general error
  res.status(400).send({
    errors: [{ message: err.message }],
  });
};
