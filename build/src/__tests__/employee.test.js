"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const server_1 = __importDefault(require("../utils/server"));
const employeeService = __importStar(require("../service/employee.service"));
const supertest_1 = __importDefault(require("supertest"));
const app = (0, server_1.default)();
const empPayload = {
    employee: {
        _id: "63a0471d6fa4cbc5be8afc2a",
        firstName: "Germany",
        lastName: "Danial",
        email: "jhon@gmail.com",
        phone: "+94779152185",
        gender: "M",
        photo: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
        __v: 0,
    },
};
const employee = {
    _id: "63a0471d6fa4cbc5be8afc2a",
    firstName: "Germany",
    lastName: "Danial",
    //email: "jhon@gmail.com",
    phone: "+94779152185",
    gender: "M",
    photo: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
    __v: 0,
};
const nullEmployee = {
    employee: null,
    message: "please check your id",
};
describe("employees", () => {
    describe("given fetching all the employees", () => {
        it("should contain an object named employees in the body", () => __awaiter(void 0, void 0, void 0, function* () {
            const getEmployeeMockService = jest
                .spyOn(employeeService, "getAllEmployeesService")
                //@ts-ignore
                .mockReturnValue({});
            const { statusCode, body } = yield (0, supertest_1.default)(app)
                .get("/employee")
                .set("Accept", "application/json");
            expect(statusCode).toBe(200);
            expect(body).toHaveProperty("employees");
        }));
    });
    describe("given the employee does exist", () => {
        it("should return an employee object", () => __awaiter(void 0, void 0, void 0, function* () {
            const getEmployeeMockService = jest
                .spyOn(employeeService, "getEmployeeByIdService")
                //@ts-ignore
                .mockReturnValue(employee);
            const { statusCode, body } = yield (0, supertest_1.default)(app).get("/employee/getEmployee/63a59b0d4a92885539a2fa08");
            expect(statusCode).toBe(200);
            expect(body).toHaveProperty("employee");
        }));
    });
    describe("given the employee does not exist", () => {
        it("should return a null employee object", () => __awaiter(void 0, void 0, void 0, function* () {
            const getEmployeeMockService = jest
                .spyOn(employeeService, "getEmployeeByIdService")
                //@ts-ignore
                .mockReturnValue({});
            const { statusCode, body } = yield (0, supertest_1.default)(app)
                .get("/employee/getEmployee/63a0471d6fa4ccc5be8afc4a")
                .set("Accept", "application/json");
            expect(body).toHaveProperty("message");
        }));
    });
    describe("given the employee id on the url is in invalid format", () => {
        it("should return an error code of 422 and a status of error", () => __awaiter(void 0, void 0, void 0, function* () {
            const getEmployeeMockService = jest
                .spyOn(employeeService, "getEmployeeByIdService")
                //@ts-ignore
                .mockReturnValue(employee);
            const { statusCode, body } = yield (0, supertest_1.default)(app).get("/employee/getEmployee/63a0471d6fa4cbc5be7fc2adsfdsfs");
            expect(statusCode).toBe(422);
            expect(body.status).toBe("error");
        }));
    });
});
// describe("testing employees", () => {
//   it("should retun an employee", async () => {
//     const getEmployeeMockService = jest
//       .spyOn(employeeService, "getEmployeeByIdService")
//       //@ts-ignore
//       .mockReturnValue(employee);
//     const { status, body } = await supertest(app).get(
//       "/employee/getEmployee/63a0471d6fa4cbc5be8afc2a"
//     );
//     // expect(body).toEqual(empPayload);
//     expect(body).toHaveProperty("error");
//     // expect(getEmployeeMockService).toHaveBeenCalled();
//   });
//   it("should return all employees", async () => {
//     const getAllEmployees = jest
//       .spyOn(employeeService, "getAllEmployeesService")
//       //@ts-ignore
//       .mockReturnValue({});
//     const { status, body } = await supertest(app)
//       .get("/employee")
//       .set("Accept", "application/json");
//     expect(body).toHaveProperty("employees");
//     console.log(body);
//   });
// });
// it("should return the user payload", async () => {
//     const createUserServiceMock = jest
//       .spyOn(UserService, "createUser")
//       // @ts-ignore
//       .mockReturnValueOnce(userPayload);
//     const { statusCode, body } = await supertest(app)
//       .post("/api/users")
//       .send(userInput);
//     expect(statusCode).toBe(200);
//     expect(body).toEqual(userPayload);
//     expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
//   });
