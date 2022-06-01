import veterinaryModel from "../models/Veterinary.js";




export const register = async (req, res) => {
    
    const {email} = req.body;

    //avoid duplicate veterinaries
    const userExist = await veterinaryModel.findOne({
        email:email
    });
    
    if(userExist) {
        const error = new Error("El usuario ya existe");

        return res.status(400).json({msg: error.message});
    }

    try {

        //save a new veterinary
        const veterinary = new veterinaryModel(req.body);

        const veterinarySaved = await veterinary.save();

        //response
        res.json(veterinarySaved)
    } catch (error) {
        console.log(error);
    }
    
};

export const profile = (req, res) => {
    res.json({ msg: "Mostrando perfil"})
};

//with this function we check if the user get into the url with a valid token
//if it is a valid token so the account get confirmed and the token is deleted.
export const confirm = async (req, res) => {
    const { token } = req.params;

    const confirmUser = await veterinaryModel.findOne( {token} ); //we search the token in the db

    if(!confirmUser) {
        const error = new Error("Token is not valid!");
        return res.status(404).json({msg: error.message});
    }

    try {
        confirmUser.token = null;
        confirmUser.confirmed = true;
        await confirmUser.save();
        res.json({msg: "User is now active!!"})
    } catch (error) {
        console.log(error)
    }

    console.log(confirmUser);
    res.json({msg: "Confirming the account...."})
}