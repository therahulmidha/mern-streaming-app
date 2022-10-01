import { Response } from "express";
import { GenericResponse } from "../types/GenericResponse";

export class ResponseHandler implements GenericResponse {
  response: Response;
  statusCode = 200;
  message = "Status OK";
  success = false;
  info: string;
  data: any[] | Record<string, any>;

  constructor(
    response: Response,
    info: string,
    success: boolean,
    data: any[] | Record<string, any>
  ) {
    this.info = info;
    this.data = data;
    this.response = response;
    this.success = success;
  }

  getResponse() {
    return (
      this.response
        .status(this.statusCode)
        .json({
          message: this.message,
          info: this.info,
          data: this.data,
          success: this.success,
        })
    );
  }
}

export class NoContentSuccessHandler extends ResponseHandler {
  statusCode = 204;
  message = "No Content";
}