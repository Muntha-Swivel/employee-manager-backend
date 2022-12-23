import { Request, Response, NextFunction } from "express";
import { createEmployeeSchema } from "../schema/employee.schema";
const validateAddEmployeeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = createEmployeeSchema.validate(req.body);
  console.log(req.body);
  if (error) {
    return res
      .status(422)
      .json({ status: "error", error: " Unprocessable Entity" });
  }

  next();
  return;
};

export default validateAddEmployeeMiddleware;
