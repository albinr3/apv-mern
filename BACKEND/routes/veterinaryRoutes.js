import express from "express";
import { profile, register, confirm, authenticateUser, forgetPassword, checkTokenPassword, newPassword} from "../controllers/veterinaryController.js";
import checkAuth from "../middleware/authMiddleware.js";

const veterinaryRouter = express.Router();

//public
veterinaryRouter.post("/", register);
veterinaryRouter.get("/confirm/:token", confirm);
veterinaryRouter.post("/login", authenticateUser);
veterinaryRouter.post("/forget-password", forgetPassword); //valid user email
veterinaryRouter.get("/forget-password/:token", checkTokenPassword); //check if the token is correct
veterinaryRouter.post("/forget-password/:token", newPassword); //change the user password


//private
veterinaryRouter.get("/profile", checkAuth ,profile);

export default veterinaryRouter;