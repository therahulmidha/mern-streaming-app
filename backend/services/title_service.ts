import { Request, Response } from "express";
import { NotFoundError } from "../utils/response/error_handler";
import TitleModel from "../models/Title";
import { Title } from "../utils/types/Title";

export class TitleService {
  public getTitleByType = async (req: Request, res: Response) => {
    let titles: Title[] = await TitleModel.find({
      programType: req.params.title_type,
    });

    if (titles.length === 0) {
      const staticData = require("../data/title_static_data.json");
      if (!staticData?.entries?.length) {
        throw new NotFoundError(res, "No titles found");
      }
      await TitleModel.insertMany(staticData.entries);
      titles = staticData.entries;
    }

    return titles;
  };
}
