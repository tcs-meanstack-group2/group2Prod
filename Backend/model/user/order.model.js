let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    _id: Number,
    userID: Number,
    status: String,
    amount: Number,
    timestamp: Date
});

let OrderModel = mongoose.model("orderModel", OrderSchema, "Orders");

module.exports = OrderModel;