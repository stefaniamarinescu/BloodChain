const mongoose = require("mongoose");

const ProspectSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    mail:{type:String},
    phone:{type:String},
    bloodgroup:{type:String},
    weight:{type:Number, require:true},
    date:{type:String, require:true},
    diseases:{type:String, require:true},
    age:{type:Number, require:true},
    bloodpressure:{type:Number},
    status:{type:Number, default:0}
})

module.exports = mongoose.model("Prospect", ProspectSchema);