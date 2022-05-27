import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 4000;

//connect the database
connectDb();

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})

app.use("/", (req,res) => {
    res.send("hola")
})


