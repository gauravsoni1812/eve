import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    isloggedIn:{
        type:Boolean,
        default:false
    },
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: {type: String, required: true },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users ||  mongoose.model("users", userSchema);

export default User;