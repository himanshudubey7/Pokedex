import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    favorites:[
        {
            name:String,
            image:String,
            types:[String],
            stats:[{name:String,value:Number}]
        }
    ]
});

export default mongoose.model('User',userSchema);