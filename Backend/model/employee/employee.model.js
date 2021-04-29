const mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const EmployeeSchema = mongoose.Schema({
    _id:Number,
    FirstName:String,
    LastName:String,
    EmailID:String,
    Password:String
});

const EmployeeModel = mongoose.model("EmployeeDetails",EmployeeSchema,"EmployeeDetails");

module.exports = EmployeeModel;