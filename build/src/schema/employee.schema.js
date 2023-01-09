"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqParamasSchemaId = exports.updateEmployeeSchema = exports.createEmployeeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const phoneNumberRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
const mongooseIdRegex = /^[a-fA-F0-9]{24}$/;
const createEmployeeSchema = joi_1.default.object({
    firstName: joi_1.default.string().min(6).max(10).required(),
    lastName: joi_1.default.string().min(6).max(10).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().regex(phoneNumberRegex),
    gender: joi_1.default.string(),
    photo: joi_1.default.string(),
});
exports.createEmployeeSchema = createEmployeeSchema;
// const reqParamasSchemaId = Joi.object({
//   id: Joi.string().required(),
// });
const reqParamasSchemaId = joi_1.default.string().regex(mongooseIdRegex).required();
exports.reqParamasSchemaId = reqParamasSchemaId;
const updateEmployeeSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    firstName: joi_1.default.string().min(6).max(10).required(),
    lastName: joi_1.default.string().min(6).max(10).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().regex(phoneNumberRegex),
    gender: joi_1.default.string(),
    photo: joi_1.default.string(),
});
exports.updateEmployeeSchema = updateEmployeeSchema;
