import mongoose from "mongoose";
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

const veterinaryModel = mongoose.model("veterinaries", veterinarySchema); //the first parameter is the colletion name

export default veterinaryModel;