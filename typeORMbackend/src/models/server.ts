import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";
import router from "../routes/items.routes";

const port = 8080;
export const app: Express = express()

app.use( cors() )
app.use( express.json())
app.use( '/items', router  )

app.listen( port , () => {
    console.log(`-- RUNING ON PORT ${port} --`)
} )