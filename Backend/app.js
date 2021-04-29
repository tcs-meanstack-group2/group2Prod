let express = require("express");
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
const SignInModel = require('./model/admin/signin.model');


let url = "mongodb://localhost:27017/groceryStore";

//Unable to load the static files(angular files)
app.use(express.static(process.cwd()));

app.use(bodyParser.urlencoded({extended:true}));   
app.use(bodyParser.json());                         
app.use(cors());          


const mongooseDbOption ={       
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   
mongoose.connection

//Generate admin credentials if not present
SignInModel.find({},async (error,data)=>{
    if(data.length==0){
        adminLogin = new SignInModel();
        adminLogin._id = "123";
        adminLogin.Password = "admin123";
        adminLogin.save();
    }
});

//connecting with the routers
var Product = require("./router/admin/product.router.js");
var adminSignIn=require("./router/admin/signin.router.js");
var User = require("./router/user/user.router.js");
const Employee = require("./router/employee/employee.router.js");
const Reports = require("./router/admin/reports.router.js");


app.use("/admin/product",Product);
app.use("/admin",adminSignIn);
app.use("/admin/employee",Employee);
app.use("/admin/reports",Reports);

app.use("/user", User);
app.use("/user/selectedOrders", User)
app.use("/user/addTicket" , User)

app.listen(9090,()=>console.log("Server running on port number 9090"));