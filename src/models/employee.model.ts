import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const regex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

export interface iEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "M" | "F";
  photo: string;
}
const employeeSchema = new mongoose.Schema<iEmployee>({
  firstName: {
    type: String,
    required: [true, "Please enter firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Plese enter a lastname"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    match: [regex, "Please match the phone number"],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["M", "F"],
      message: "{VALUE} is not supported",
    },
  },

  photo: {
    type: String,
  },
});

const EmployeeModel = mongoose.model<iEmployee>("Employee", employeeSchema);

export default EmployeeModel;
