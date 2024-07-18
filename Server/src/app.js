import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from "./routes/userRoute.js"
import cookieParser from "cookie-parser";


import cors from 'cors';

// Initialize the express app
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Configure dotenv to load environment variables from a .env file
dotenv.config();

// Connect to the database
connectDB();

// Uncomment if you need JSON parsing and url passing
app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use("/api/users", userRoutes)

// Define a simple route - endpoint
app.get("/", (req, res) => {
  res.send("Successful");
});


// Middleware to handle 404 errors
app.use(notFound);

// Error-handling middleware should be last
app.use(errorHandler);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
