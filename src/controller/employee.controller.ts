import { Request, Response } from "express";
import { iEmployee } from "../models/employee.model";
import log from "../utils/logger";
import { reqParamasSchemaId } from "../schema/employee.schema";
import {
  getAllEmployeesService,
  getEmployeeByIdService,
  createEmployeeService,
} from "../service/employee.service";

const getAllEmployeesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllEmployeesService();
    res.status(200).json({ employees: result });
  } catch (err) {
    log.info(err);
  }
};
const getEmployeeByIdHandler = async (req: Request, res: Response) => {
  try {
    const employee = await getEmployeeByIdService(req.params.id);
    res.status(200).json({ employee: employee });
  } catch (err) {
    log.info(err);
  }
};
const createEmployeeHandler = async (req: Request, res: Response) => {
  try {
    const newEmployee = await createEmployeeService(req.body);
    res.status(200).json({ newEmployee: newEmployee });
  } catch (err: any) {
    return res.status(400).json({ status: "error", message: err });
  }
};

export {
  getAllEmployeesHandler,
  createEmployeeHandler,
  getEmployeeByIdHandler,
};
