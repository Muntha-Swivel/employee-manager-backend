import express from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import router from "./routes";
import cors from "cors";

const app = express();
const port = config.get<number>("port");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, async () => {
  log.info(`Server started on port ${port}`);
  await connect();

  app.use("/employee", router);
});
