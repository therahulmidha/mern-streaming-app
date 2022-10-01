import { Router } from "express";
const router = Router();
import titleRoutes from "./title_routes";
export default function () {
  router.use("/title", titleRoutes);
  return router;
}
