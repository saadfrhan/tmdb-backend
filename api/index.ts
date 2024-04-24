import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import preferenceRoutes from "./routes/preferences";
import connectDB from "./helper/connect-db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

app.get("/", (req, res) => {
  const { param1 } = req.query;

  res.send("Hello World!<br>Param1 = " + param1);
});

app.use("/preferences", preferenceRoutes);

export default app;
