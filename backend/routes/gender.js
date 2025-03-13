const express=require("express")
const genderController=require("../controllers/gender")
const router=express.Router()

router
    .get("/",genderController.getAll)

module.exports=router