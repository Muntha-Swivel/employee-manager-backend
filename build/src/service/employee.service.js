"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmployeeService = exports.updateEmployeeService = exports.getEmployeeByIdService = exports.getAllEmployeesService = exports.createEmployeeService = void 0;
const employee_model_1 = __importDefault(require("../models/employee.model"));
const logger_1 = __importDefault(require("../utils/logger"));
const getAllEmployeesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employee_model_1.default.find();
        return employees;
    }
    catch (err) {
        logger_1.default.info(err);
        throw err.message;
    }
});
exports.getAllEmployeesService = getAllEmployeesService;
const getEmployeeByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = employee_model_1.default.findById(id);
        return employee;
    }
    catch (err) {
        logger_1.default.info(err);
        throw err.message;
    }
});
exports.getEmployeeByIdService = getEmployeeByIdService;
const createEmployeeService = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield employee_model_1.default.create(employee);
        return result;
    }
    catch (err) {
        if (err.code === 11000) {
            throw "This email is already taken";
        }
        else {
            logger_1.default.info(err);
            throw err.message;
        }
    }
});
exports.createEmployeeService = createEmployeeService;
const updateEmployeeService = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, firstName, lastName, email, phone, gender, photo } = employee;
    try {
        const update = yield employee_model_1.default.findByIdAndUpdate(_id, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender,
            photo: photo,
        });
        return update;
    }
    catch (err) {
        logger_1.default.info(err);
        throw err.message;
    }
});
exports.updateEmployeeService = updateEmployeeService;
const removeEmployeeService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteEmployee = yield employee_model_1.default.findByIdAndDelete(id);
        const updatedData = yield employee_model_1.default.find();
        return updatedData;
    }
    catch (err) {
        logger_1.default.info(err);
        throw err.message;
    }
});
exports.removeEmployeeService = removeEmployeeService;
