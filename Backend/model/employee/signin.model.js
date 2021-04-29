let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let empSignInSchema = mongoose.Schema({
    _id:Number,
    Password:String,
    FirstName:String,
        LastName:String,
        EmailID:String
})




let empSignInModel=mongoose.model("empSignInModel",empSignInSchema,"EmployeeDetails")


module.exports = empSignInModel