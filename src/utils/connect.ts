import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  mongoose.set("strictQuery", true);
  const dbUri = process.env.dbURI || config.get<string>("dbUri");
  //The variable about have not been used to connect, because its thrwing an error in elastic beanstalk
  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to DB");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
}

export default connect;

//"mongodb+srv://muntha:xdaZoUHqUoi2NQi7@cluster0.rgttnh6.mongodb.net/?retryWrites=true&w=majority"
