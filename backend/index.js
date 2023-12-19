import express from "express";
import cors from "cors";
import { monitorTrans } from "./middleware/monitorTrans.js";
import "dotenv/config";
import apiRoutes from "./routes/api.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected to mongodb");
  app.use(cors());
  app.use(monitorTrans);
  app.use(express.json());
  app.use("/api/v1", apiRoutes);
  app.use(errorHandler);
  app.all("*", (req, res) => {
    res.status(404).json({ message: "Not found" });
  });

  app.listen(port, () => {
    console.log(`server started on port:${port}`);
  });
});
