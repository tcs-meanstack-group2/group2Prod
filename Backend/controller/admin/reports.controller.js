const OrderModel = require("../../model/user/order.model.js")

const getMonthlyReport = (req, res) => {
    const month = parseInt(req.params.month); //should be number of month

    // find({ "$expr": { "$eq": [{ "$month": "$timestamp" }, month] } }
    OrderModel.find({ $expr: { $eq: [{ $month: $timestamp }, month] } }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific month
            res.json(result);
        }
      });
}

const getDailyReport = (req, res) => {
    const date =  new Date(req.params.date).toISOString(); //may need convert to ISO

    OrderModel.find({timestamp: date}, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}

const getUserReport = (req, res) => {
    const id = req.params.id; 

    OrderModel.find({ userID: id }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}

// //might be chalked; need extra table for products ordered
// const specificProductReport = (req, res) => {
//     const id = req.params.id; 

//     OrderModel.find({ userID: id }, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific day
//             res.json(result);
//         }
//       });
// }

module.exports={getDailyReport, getMonthlyReport, getUserReport}