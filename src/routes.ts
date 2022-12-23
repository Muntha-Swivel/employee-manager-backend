import express, { Router } from "express";
import {
  getAllEmployeesHandler,
  createEmployeeHandler,
  getEmployeeByIdHandler,
} from "./controller/employee.controller";
import validateParamsMiddleware from "./middleware/validateParams.middleware";
import validateAddEmployeeMiddleware from "./middleware/validateAddEmployee.middleware";

const router = express.Router();

router.get("/", getAllEmployeesHandler);
router.get("/create", createEmployeeHandler);
router.get(
  "/getEmployee/:id",
  validateParamsMiddleware,
  getEmployeeByIdHandler
);
router.post("/", validateAddEmployeeMiddleware, createEmployeeHandler);
export default router;
