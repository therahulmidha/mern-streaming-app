import { Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../utils/response/response_handler";
import { TitleService } from "../services/title_service";
import {
  getJoiValiationError,
  validateRequest,
} from "../utils/helpers/validation_helpers";
import { getTitlesSchema } from "../validation_schemas/title_schemas";
import { CustomError, ForbiddenError } from "../utils/response/error_handler";
const titleService = new TitleService();
export class TitleController {
  public getTitleByType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate request
      const validateResult = validateRequest(req.params, getTitlesSchema);
      if (validateResult.error) {
        return new ForbiddenError(
          res,
          getJoiValiationError(validateResult)
        ).getResponse();
      }

      const titleData = await titleService.getTitleByType(req, res);
      if (titleData) {
        return new ResponseHandler(
          res,
          "Title details",
          true,
          titleData
        ).getResponse();
      }
      return new CustomError(res, "Unable to get titles").getResponse();
    } catch (error) {
      next(error);
    }
  };
}
