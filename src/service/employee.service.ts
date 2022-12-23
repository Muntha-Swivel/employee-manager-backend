import mongoose from "mongoose";
import EmployeeModel from "../models/employee.model";
import { iEmployee } from "../models/employee.model";
import log from "../utils/logger";

const getAllEmployeesService = async () => {
  try {
    const employees = await EmployeeModel.find();
    return employees;
  } catch (err) {
    log.info(err);
  }
};
const getEmployeeByIdService = async (id: string) => {
  try {
    const employee = EmployeeModel.findById(id);
    return employee;
  } catch (err) {
    log.info(err);
  }
};
const createEmployeeService = async (employee: iEmployee) => {
  try {
    const result = await EmployeeModel.create(employee);
    return result;
  } catch (err: any) {
    if (err.code === 11000) {
      throw "This email is already taken";
    } else {
      log.info(err);
      throw err.message;
    }
  }
};

export {
  createEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
};
