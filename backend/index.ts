import express from "express";
import helmet from "helmet";
import compression from "compression";
import { loadEnvs } from "./config/envs";
import { MongoConnect } from "./database/mongo_connect";
import { handleFailures } from "./startup/failure_handler";
import { initializeRoutes } from "./startup/route_handler";

(async () => {
  loadEnvs();

  // initialize mongo connection
  await MongoConnect.initializeConnection();
 
  // initialize route handling
  const app = express();
  initializeRoutes(app);

  // use helmet, compression modules for production env
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
  }

  // handle unexpected failures
  handleFailures();
})();
