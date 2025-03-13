const mongoose=require("mongoose")
const {Schema}=mongoose


const genderSchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("gender",genderSchema)