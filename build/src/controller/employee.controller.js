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
exports.empTesting = exports.removeEmployeeHandler = exports.updateEmployeeHandler = exports.getEmployeeByIdHandler = exports.createEmployeeHandler = exports.getAllEmployeesHandler = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const employee_service_1 = require("../service/employee.service");
const getAllEmployeesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, employee_service_1.getAllEmployeesService)();
        res.status(200).json({ employees: result, message: "success" });
    }
    catch (err) {
        logger_1.default.info(err);
        res.status(400).json({ status: "error", message: err });
    }
});
exports.getAllEmployeesHandler = getAllEmployeesHandler;
const getEmployeeByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield (0, employee_service_1.getEmployeeByIdService)(req.params.id);
        if (employee === null) {
            res
                .status(404)
                .json({ employee: employee, message: "please check your id" });
        }
        else {
            res.status(200).json({ employee: employee });
        }
    }
    catch (err) {
        logger_1.default.info(err);
        return res.status(400).json({ status: "error", message: err });
    }
});
exports.getEmployeeByIdHandler = getEmployeeByIdHandler;
const createEmployeeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEmployee = yield (0, employee_service_1.createEmployeeService)(req.body);
        return res.status(200).json({ message: "success" });
    }
    catch (err) {
        return res.status(400).json({ status: "error", message: err });
    }
});
exports.createEmployeeHandler = createEmployeeHandler;
const updateEmployeeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, employee_service_1.updateEmployeeService)(req.body);
        return res.status(200).json({ message: "success" });
    }
    catch (err) {
        return res.status(400).json({ status: "error", message: err });
    }
});
exports.updateEmployeeHandler = updateEmployeeHandler;
const removeEmployeeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedData = yield (0, employee_service_1.removeEmployeeService)(id);
        res.status(200).json({ employees: updatedData });
        console.log(updatedData);
    }
    catch (err) {
        return res.status(400).json({ status: "error", message: err });
    }
});
exports.removeEmployeeHandler = removeEmployeeHandler;
const empTesting = (req, res) => {
    res.status(200).json({ message: "success" });
};
exports.empTesting = empTesting;
