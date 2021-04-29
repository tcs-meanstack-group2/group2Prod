let express = require("express");
let router = express.Router();  //router reference. 
const ReportsController = require("../../controller/admin/reports.controller.js");

//mapping sub path with http methods.
router.get("/getDailyReport/:timestamp",ReportsController.getDailyReport);
router.get("/getMonthlyReport/:month",ReportsController.getMonthlyReport);
router.get("/getUserReport/:id",ReportsController.getUserReport);

module.exports=router;