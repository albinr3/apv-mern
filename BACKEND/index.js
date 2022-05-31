import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import veterinaryRouter from "./routes/veterinaryRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

//connect the database
connectDb();

//we need this to get the data from the request body on reguster veterinary
app.use(express.json());


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})

//url
app.use("/api/veterinaries", veterinaryRouter);


