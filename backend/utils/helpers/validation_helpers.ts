import Joi, { ValidationResult } from "joi";

export function validateRequest(
  object: { [key: string]: string },
  schema: Joi.ObjectSchema
) {
  return schema.validate(object);
}

export function getJoiValiationError(validationResult: ValidationResult) {
  return (
    validationResult?.error?.details[0]?.message ??
    "Request Data Validation Failed"
  );
}