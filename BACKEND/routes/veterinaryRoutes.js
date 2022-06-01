import express from "express";
import { profile, register, confirm } from "../controllers/veterinaryController.js";

const veterinaryRouter = express.Router();

veterinaryRouter.post("/", register);

veterinaryRouter.get("/profile", profile);

veterinaryRouter.get("/confirm/:token", confirm);



export default veterinaryRouter;