import express, { Router } from "express";
import {
  getAllEmployeesHandler,
  createEmployeeHandler,
  getEmployeeByIdHandler,
  updateEmployeeHandler,
  removeEmployeeHandler,
  empTesting,
} from "./controller/employee.controller";
import validateParamsMiddleware from "./middleware/validateParams.middleware";
import validateAddEmployeeMiddleware from "./middleware/validateAdd.middleware";
import validateUpdateEmployeeMiddleware from "./middleware/validateUpdate.middleware";

const router = express.Router();

router.get("/", getAllEmployeesHandler);
router.get("/create", createEmployeeHandler);
router.get(
  "/getEmployee/:id",
  validateParamsMiddleware,
  getEmployeeByIdHandler
);
router.get(
  "/removeEmployee/:id",
  validateParamsMiddleware,
  removeEmployeeHandler
);
router.get("/testing", empTesting);

router.post("/", validateAddEmployeeMiddleware, createEmployeeHandler);
router.post("/update", validateUpdateEmployeeMiddleware, updateEmployeeHandler);

export default router;
