import express, { Application } from "express";
import cors from "cors";


const app:Application = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
app.listen(5000, () => {
    console.log("server currently running");
})