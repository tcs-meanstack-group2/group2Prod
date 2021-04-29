let OrderModel = require("../../model/user/order.model.js")
let UserModel = require("../../model/user/user.model.js")
let BankModel = require("../../model/user/bank.model.js")
let TicketModel = require("../../model/user/ticket.model")
let SelectedOrdersModel = require("../../model/user/selectedOrders.model")
// Retrieving Order status from Mongo Database
let getOrderById = (req, res) => {
    let id = req.params.id;
    OrderModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

let editProfile = (req,res)=> {
    let id = req.body.id;
    let oldPass = req.body.pass;
    let newPass = req.body.newPass;
    let fName = req.body.newFname;
    let lName = req.body.newLname;
    let email = req.body.newEmail;
    let pNum = req.body.newPhone;
    let dob = req.body.newDob;
    let add = req.body.newAdd;
    UserModel.updateOne({_id: id, password: oldPass}, {$set:{
        password: newPass,
        fName: fName,
        lName: lName,
        email: email,
        pNumber: pNum,
        dob: dob,
        address: add
    }}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("User ID or Password is incorrect");
            }
        }else {
            res.send("Error: Please ensure your User ID is valid");
        }
    })
}

let addFunds = (req,res)=> {
    let id = req.body.accNum;
    let addFund = req.body.funds;
    BankModel.updateOne({_id: id}, {$inc:{funds: addFund}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Balance updated succesfully");
            }else {
                    res.send("Account number is incorrect");
            }
        }else {
            res.send("Error generated " + err);
        }
    })
}


let addTicket = (req,res)=> {
    let user_id = req.body.user_id;
    let ticket_message = req.body.ticket_message;
    TicketModel.insertOne({user_id:user_id}, {ticket_message:ticket_message}, (err1,result) => {
        if(!err){
            res.send("Ticket stored successfully ")
            
        }else {
            res.send("Record didn't store, Try again! ");
        }
    });
}               

let orderSelected = (req,res)=> {
    let _id = req.body._id;
    let ProductName = req.body.ProductName;
    let ProductPrice = req.body.ProductPrice;
    let ProductQuantity = req.body.ProductQuantity;
    let Discount = req.body.Discountl
    SelectedOrdersModel.insertOne({_id:_id}, {ProductName:ProductName},{ProductPrice:ProductPrice}, {ProductQuantity:ProductQuantity}, {Discount:Discount}, (err1,result) => {
        if(!err){
            res.send("Orders Stored Successfully ")
            
        }else {
            res.send("Order did not store, please try again! ");
        }
    });
}    

let getFundsById = (req, res) => {
    let id = req.params.id;
    BankModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

module.exports = {getOrderById, editProfile, addFunds, getFundsById, addTicket, orderSelected};

