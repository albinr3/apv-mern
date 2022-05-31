import generateId from "../helpers/generateId.js";
import veterinaryModel from "../models/Veterinary.js";




export const register = async (req, res) =>{
    
    const {email} = req.body;

    //avoid duplicate veterinaries
    const userExist = await veterinaryModel.findOne({
        email:email
    });
    console.log(generateId())
    if(userExist) {
        const error = new Error("El usuario ya existe");

        return res.status(400).json({msg: error.message});
    }

    try {

        //save a new veterinary
        const veterinary = new veterinaryModel(req.body);

        const veterinarySaved = await veterinary.save();
        res.json(veterinarySaved)
    } catch (error) {
        console.log(error);
    }
    
};

export const profile = (req, res) =>{
    res.json({ msg: "Mostrando perfil"})
};