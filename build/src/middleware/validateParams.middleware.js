"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_schema_1 = require("../schema/employee.schema");
const validateParamsMiddleware = (req, res, next) => {
    const { error, value } = employee_schema_1.reqParamasSchemaId.validate(req.params.id);
    if (error) {
        return res
            .status(422)
            .json({ status: "error", error: " Unprocessable Entity" });
    }
    next();
    return;
};
exports.default = validateParamsMiddleware;
