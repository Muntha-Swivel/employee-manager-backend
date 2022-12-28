import Joi from "joi";
import mongoose, { SchemaType } from "mongoose";
const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const mongooseIdRegex = /^[a-fA-F0-9]{24}$/;

const createEmployeeSchema = Joi.object({
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

// const reqParamasSchemaId = Joi.object({
//   id: Joi.string().required(),
// });

const reqParamasSchemaId = Joi.string().regex(mongooseIdRegex).required();

const updateEmployeeSchema = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

//const services = Joi.array().items(postSchema);

export { createEmployeeSchema, updateEmployeeSchema, reqParamasSchemaId };
