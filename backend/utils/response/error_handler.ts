import { GenericResponse } from "../types/GenericResponse";
import { Response } from "express";
export class CustomError implements GenericResponse {
  response: Response;
  statusCode = 500;
  message = "Internal Server Error";
  success = false;
  info: string;

  constructor(response: Response, info: string, error?: any) {
    if (error) {
      console.log(error);
    }
    this.info = info;
    this.response = response;
    this.success = false;
  }

  getResponse() {
    return (
      this.response
        .status(this.statusCode)
        .json({
          message: this.message,
          info: this.info,
          success: false,
        })
    );
  }
}

export class BadRequestError extends CustomError {
  statusCode = 400;
  message = "Bad Request";
}

export class UnauthorizedError extends CustomError {
  statusCode = 401;
  message = "Unauthorized";
}
export class ForbiddenError extends CustomError {
  statusCode = 403;
  message = "Forbidden";
}
export class NotFoundError extends CustomError {
  statusCode = 404;
  message = "Not Found";
}
export class ConflictError extends CustomError {
  statusCode = 409;
  message = "Conflict";
}
