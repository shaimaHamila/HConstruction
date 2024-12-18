import Joi from "joi";

export const ContactValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
  phone: Joi.string().optional(),
});
