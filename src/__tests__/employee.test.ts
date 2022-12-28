import request from "supertest";
import createServer from "../utils/server";
import connect from "../utils/connect";
import * as employeeService from "../service/employee.service";
import supertest from "supertest";
import { iEmployee } from "../models/employee.model";

const app = createServer();
const empPayload = {
  employee: {
    _id: "63a0471d6fa4cbc5be8afc2a",
    firstName: "Germany",
    lastName: "Danial",
    email: "jhon@gmail.com",
    phone: "+94779152185",
    gender: "M",
    photo:
      "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
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
  photo:
    "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  __v: 0,
};

const nullEmployee = {
  employee: null,
  message: "please check your id",
};

describe("employees", () => {
  describe("given fetching all the employees", () => {
    it("should contain an object named employees in the body", async () => {
      const getEmployeeMockService = jest
        .spyOn(employeeService, "getAllEmployeesService")
        //@ts-ignore
        .mockReturnValue({});
      const { statusCode, body } = await supertest(app)
        .get("/employee")
        .set("Accept", "application/json");

      expect(statusCode).toBe(200);
      expect(body).toHaveProperty("employees");
    });
  });

  describe("given the employee does exist", () => {
    it("should return an employee object", async () => {
      const getEmployeeMockService = jest
        .spyOn(employeeService, "getEmployeeByIdService")
        //@ts-ignore
        .mockReturnValue(employee);
      const { statusCode, body } = await supertest(app).get(
        "/employee/getEmployee/63a59b0d4a92885539a2fa08"
      );

      expect(statusCode).toBe(200);
      expect(body).toHaveProperty("employee");
    });
  });

  describe("given the employee does not exist", () => {
    it("should return a null employee object", async () => {
      const getEmployeeMockService = jest
        .spyOn(employeeService, "getEmployeeByIdService")
        //@ts-ignore
        .mockReturnValue({});
      const { statusCode, body } = await supertest(app)
        .get("/employee/getEmployee/63a0471d6fa4ccc5be8afc4a")
        .set("Accept", "application/json");
      expect(body).toHaveProperty("message");
    });
  });

  describe("given the employee id on the url is in invalid format", () => {
    it("should return an error code of 422 and a status of error", async () => {
      const getEmployeeMockService = jest
        .spyOn(employeeService, "getEmployeeByIdService")
        //@ts-ignore
        .mockReturnValue(employee);
      const { statusCode, body } = await supertest(app).get(
        "/employee/getEmployee/63a0471d6fa4cbc5be7fc2adsfdsfs"
      );

      expect(statusCode).toBe(422);
      expect(body.status).toBe("error");
    });
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
