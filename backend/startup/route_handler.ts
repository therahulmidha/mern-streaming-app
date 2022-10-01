import express, { Application, Request, Response } from "express";
import { errorHandler } from "../middlewares/error_handler";
import v1Routes from "../routes/v1/index";
import { NotFoundError } from "../utils/response/error_handler";
import cors from "cors";
import cookieParser from "cookie-parser";
import { allowedOrigins } from "../config/allowedOrigins";
export function initializeRoutes(app: Application) {
  const PORT = process.env.SERVER_PORT || 3000;
  // allow cross origin resource sharing
  app.use(
    cors({
      origin: allowedOrigins,
    })
  );

  // built in middleware for json
  app.use(express.json());

  // built in middleware for cookies
  app.use(cookieParser());

  // Just to know if server is running
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to streaming-app backend");
  });

  app.use("/api/v1", v1Routes());

  // middleware for handling internal server error
  app.use(errorHandler);

  // Middleware for unknown endpoints
  app.use(function (req, res) {
    return new NotFoundError(
      res,
      "Route " + req.url + " Not found."
    ).getResponse();
  });

  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
}
