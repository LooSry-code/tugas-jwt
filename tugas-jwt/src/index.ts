import express from 'express';
import connectDB from "./config/db";
import router from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

// start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
