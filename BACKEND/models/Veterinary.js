import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generateId from "../helpers/generateId.js";


const veterinarySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true, //to delete empty spaces
        required: true //to add validation to the database
    },

    password: {
        type: String,
        required: true //to add validation to the database
    },

    email: {
        type: String,
        trim: true, //to delete empty spaces
        required: true, //to add validation to the database
        unique: true //only one email per database
    },

    tel: {
        type: String,
        trim: true, //to delete empty spaces
        default: null //to add validation to the database
    },

    web: {
        type: String,
        trim: true, //to delete empty spaces
        default: null //to add validation to the database
    },
    token: {
        type: String,
        default: generateId()
    },

    confirmed: { //check if the user is confirmed
        type: Boolean,
        default: false 
    }
});

//with this we hash the password before save the data
veterinarySchema.pre("save", async function (next) {
    //we check if the password is being modified
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
const veterinaryModel = mongoose.model("veterinaries", veterinarySchema); //the first parameter is the colletion name

export default veterinaryModel;