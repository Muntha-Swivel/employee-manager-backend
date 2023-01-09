"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = require("./controller/employee.controller");
const validateParams_middleware_1 = __importDefault(require("./middleware/validateParams.middleware"));
const validateAdd_middleware_1 = __importDefault(require("./middleware/validateAdd.middleware"));
const validateUpdate_middleware_1 = __importDefault(require("./middleware/validateUpdate.middleware"));
const router = express_1.default.Router();
router.get("/", employee_controller_1.getAllEmployeesHandler);
router.get("/create", employee_controller_1.createEmployeeHandler);
router.get("/getEmployee/:id", validateParams_middleware_1.default, employee_controller_1.getEmployeeByIdHandler);
router.get("/removeEmployee/:id", validateParams_middleware_1.default, employee_controller_1.removeEmployeeHandler);
router.get("/testing", employee_controller_1.empTesting);
router.post("/", validateAdd_middleware_1.default, employee_controller_1.createEmployeeHandler);
router.post("/update", validateUpdate_middleware_1.default, employee_controller_1.updateEmployeeHandler);
exports.default = router;
