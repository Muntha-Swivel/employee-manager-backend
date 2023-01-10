"use strict";
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
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.set("strictQuery", true);
        //const dbUri = config.get<string>("dbUri");
        //The variable about have not been used to connect, because its thrwing an error in elastic beanstalk
        try {
            yield mongoose_1.default.connect("mongodb+srv://muntha:xdaZoUHqUoi2NQi7@cluster0.rgttnh6.mongodb.net/?retryWrites=true&w=majority");
            logger_1.default.info("Connected to DB");
        }
        catch (error) {
            logger_1.default.error("Could not connect to DB");
            process.exit(1);
        }
    });
}
exports.default = connect;
