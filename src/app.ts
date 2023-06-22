import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

// Routes
import router from "./routes";
app.use("/", router);

// Error handling middleware
import errorHandler from "./middlewares/errorHandler";
app.use(errorHandler);

export default app;
