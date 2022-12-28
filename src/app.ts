import express from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import router from "./routes";
import cors from "cors";
import createServer from "./utils/server";

const app = createServer();
const port = config.get<number>("port");

app.listen(port, async () => {
  log.info(`Server started on port ${port}`);
  await connect();
});

//const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());