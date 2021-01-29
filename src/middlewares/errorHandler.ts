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

  // Some different error occured, logging it out
  console.error(err);
  // Defaulting to a general error
  res.status(400).send({
    errors: [{ message: err.message }],
  });
};
