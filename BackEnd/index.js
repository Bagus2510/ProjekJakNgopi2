import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({
    credentials: true, 
    origin: 'http://localhost:5173' // Sesuaikan port frontend
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"))