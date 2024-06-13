const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "email":String,
        "phone":String,
        "gender":String,
        "password":String,
        "confirm":String
        

    }
)

let busmodel=mongoose.model("users",schema);
module.exports={busmodel}