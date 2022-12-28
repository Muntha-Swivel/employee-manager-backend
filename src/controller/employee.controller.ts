import { Request, Response } from "express";
import { iEmployee } from "../models/employee.model";
import log from "../utils/logger";
import { reqParamasSchemaId } from "../schema/employee.schema";
import {
  getAllEmployeesService,
  getEmployeeByIdService,
  createEmployeeService,
  updateEmployeeService,
  removeEmployeeService,
} from "../service/employee.service";

const getAllEmployeesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllEmployeesService();
    res.status(200).json({ employees: result, message: "success" });
  } catch (err) {
    log.info(err);
    res.status(400).json({ status: "error", message: err });
  }
};
const getEmployeeByIdHandler = async (req: Request, res: Response) => {
  try {
    const employee = await getEmployeeByIdService(req.params.id);
    if (employee === null) {
      res
        .status(404)
        .json({ employee: employee, message: "please check your id" });
    } else {
      res.status(200).json({ employee: employee });
    }
  } catch (err) {
    log.info(err);
    return res.status(400).json({ status: "error", message: err });
  }
};
const createEmployeeHandler = async (req: Request, res: Response) => {
  try {
    const newEmployee = await createEmployeeService(req.body);
    return res.status(200).json({ message: "success" });
  } catch (err: any) {
    return res.status(400).json({ status: "error", message: err });
  }
};

const updateEmployeeHandler = async (req: Request, res: Response) => {
  try {
    const result = await updateEmployeeService(req.body);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res.status(400).json({ status: "error", message: err });
  }
};

const removeEmployeeHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedData = await removeEmployeeService(id);
    res.status(200).json({ employees: updatedData });
    console.log(updatedData);
  } catch (err) {
    return res.status(400).json({ status: "error", message: err });
  }
};

const empTesting = (req: Request, res: Response) => {
  res.status(200).json({ message: "success" });
};

export {
  getAllEmployeesHandler,
  createEmployeeHandler,
  getEmployeeByIdHandler,
  updateEmployeeHandler,
  removeEmployeeHandler,
  empTesting,
};
