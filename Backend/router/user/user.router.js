let express = require("express");
let router = express.Router();
let UserController = require("../../controller/user/user.controller.js")

// Route for retrieving order status
router.get("/retrieveOrder/:id", UserController.getOrderById);
router.put("/editProfile", UserController.editProfile);
router.put("/addFunds", UserController.addFunds);
router.post("/selectedOrders", UserController.orderSelected);
router.post("/addTicket", UserController.addTicket);
router.get("/retrieveFunds/:id", UserController.getFundsById);


module.exports = router;