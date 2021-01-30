import { CustomError } from "./CustomError";

export class ResourceNotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not found");
    // Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
