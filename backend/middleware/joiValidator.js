import tryCatchErr from "./tryCatchErr.js";

export function joiValidatorBody(schema) {
  return tryCatchErr(async (req, res, next) => {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  });
}
export function joiValidatorParams(schema) {
  return tryCatchErr(async (req, res, next) => {
    await schema.validateAsync(req.params, { abortEarly: false });
    next();
  });
}
