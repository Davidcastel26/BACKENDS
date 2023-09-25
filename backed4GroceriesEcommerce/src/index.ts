import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import corsConfig from "./configs/corsConfig";

import { categoryRouter, productRouter } from "./routers";

import { productPaths } from "./models/paths";

dotenv.config();

let port: string = process.env.PORT || '8080';

const app:Application = express();
// const server = require("http").createServer(app);

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
// routes
app.use( productPaths.product, productRouter );
app.use( productPaths.category, categoryRouter );

app.listen(port, () => {
    console.log(`-- SERVER LISTENING ON PORT ${port} --`);
});