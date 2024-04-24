import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import preferenceRoutes from "./routes/preferences";
import connectDB from "./helper/connect-db";

dotenv.config();

const app = express();
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://tmdb-frontend-chi.vercel.app"
      : "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/preferences", preferenceRoutes);

export default app;
