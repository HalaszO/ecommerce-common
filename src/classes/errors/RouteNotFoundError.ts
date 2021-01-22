import CustomError from "./CustomError";

export default class RouteNotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not found");
    // Object.setPrototypeOf(this, RouteNotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
