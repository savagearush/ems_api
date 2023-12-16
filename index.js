import express from "express";
import cors from "cors";
import morgan from "morgan";
import startdb from "./db.js";
import User from "./routes/User.js";
import Vendor from "./routes/Vendor.js";
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/user", User);
app.use("/vendor", Vendor);

// Start MongoDB Server
startdb();

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
