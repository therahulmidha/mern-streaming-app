import { Router } from "express";
import { TitleController } from "../../controllers/title_controller";
const router = Router();
const titleController = new TitleController();

router.get(
  "/:title_type",
  titleController.getTitleByType
);

export default router;
