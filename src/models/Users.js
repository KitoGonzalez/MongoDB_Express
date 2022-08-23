import mongoose from "mongoose";

//Nombre de Collection
const collection = `users`
//Definir Schema
const usersSchema = mongoose.Schema({
    first_name:String,
    last_name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"Stundent"
    },
    active:{
        type:Boolean,
    },
    email:{
        type:String,
        default:"CorreoDefault@gmail.com"
    },
    course:String,
    grade:Number,
    dni:String,
},{timestamps:true})
//Convertir en  Model :D
const usersService = mongoose.model(collection,usersSchema);
export default usersService;