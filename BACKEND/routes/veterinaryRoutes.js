import express from "express";
import { profile, register } from "../controllers/veterinaryController.js";

const veterinaryRouter = express.Router();

veterinaryRouter.post("/", register);

veterinaryRouter.get("/profile", profile);



export default veterinaryRouter;