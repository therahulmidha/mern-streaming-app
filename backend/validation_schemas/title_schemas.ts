import Joi from "joi";
import { ValidTitles } from "../constants/ValidTitles";

export const getTitlesSchema = Joi.object({
  title_type: Joi.string()
    .valid(...Object.values(ValidTitles))
    .required(),
});
