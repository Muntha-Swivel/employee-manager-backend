"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_schema_1 = require("../schema/employee.schema");
const validateAddEmployeeMiddleware = (req, res, next) => {
    const { error, value } = employee_schema_1.updateEmployeeSchema.validate(req.body);
    console.log(req.body);
    if (error) {
        return res
            .status(422)
            .json({ status: "error", error: " Unprocessable Entity" });
    }
    next();
    return;
};
exports.default = validateAddEmployeeMiddleware;
