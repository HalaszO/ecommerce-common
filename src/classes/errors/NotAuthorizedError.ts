import { CustomError } from "./CustomError";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Unauthorized");
  }

  serializeErrors() {
    return [{ message: "Unauthorized" }];
  }
}
