import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import prisma from "./prisma";
import AuthRouter from "./routes/authRouter";
import ContactRouter from "./routes/contactRouter";
import ProjectRouter from "./routes/projectRouter";

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || 6001;

// Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:4200"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());

// Graceful shutdown for Prisma
process.on("SIGTERM", async () => {
  console.log("Shutting down gracefully...");
  await prisma.$disconnect();
  console.log("Prisma disconnected.");
  process.exit(0);
});

// Base API Route
app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Welcome to Express! Backend is connected successfully 🥳");
});

// Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/project", ProjectRouter);
app.use("/api/v1/contact", ContactRouter);

// Start the server
app.listen(port, () => {
  console.log(`Express is running at http://localhost:${port} 🥳`);
});
