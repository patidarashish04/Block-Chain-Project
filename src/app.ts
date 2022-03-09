import express, { ErrorRequestHandler }  from "express";
import createHttpError from "http-errors";
import mediaRoutes from './routes/mediaRoutes';
import mongoose from "mongoose";
import { DB } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(morgan("tiny"))
const PORT = process.env.PORT;
app.use('/', mediaRoutes);

app.use(() => {
throw createHttpError(404, "route not found")
});

app.use(errorHandler);
// app.listen(9000, () =>{
// console.log("server is running on port 9000")
// });
// console.log(DB)

mongoose
.connect(DB)
.then(() => {
    console.log("connected to DB");
    app.listen(PORT, () =>{
        console.log(`Running On PORT ${PORT}`)
    });
})
.catch(() =>{
    throw createHttpError(501, "Unable To Connect DB")
})