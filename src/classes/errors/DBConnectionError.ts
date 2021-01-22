import { CustomError } from "./CustomError";

export class DBConnectionError extends CustomError {
  reason = "Error connecting to database";
  statusCode = 503;

  constructor() {
    super("Error connecting to database");

    // Object.setPrototypeOf(this, DBConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
