import express, { Application } from "express";
import cors from "cors";
import { connectToDatabase } from "./shared/database/mongo";
import { env } from "./environment";


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
app.listen(env.PORT, async () => {
    connectToDatabase(env.DB)
    console.log("server currently running");
})