import Joi from "joi";

export const ProjectValidator = Joi.object({
  name: Joi.string().required(),
  clientName: Joi.string().optional(),
  location: Joi.string().optional(),
  surfaceArea: Joi.number().optional(),
  sector: Joi.string().optional(),
  description: Joi.string().optional(),
  images: Joi.array().items(Joi.string()).optional(),
  createdById: Joi.number().optional(),
});
