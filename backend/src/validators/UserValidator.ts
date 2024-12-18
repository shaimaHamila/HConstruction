import Joi from "joi";

export const UserLoginValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
