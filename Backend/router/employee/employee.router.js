let express = require("express");
let router = express.Router();  //router reference. 
const EmployeeController = require("../../controller/employee/employee.controller");

//mapping sub path with http methods.
router.get("/getEmployeeDetails",EmployeeController.getEmployeeDetails);
router.post("/addEmployeeDetails",EmployeeController.addEmployeeDetails);
router.post("/deleteEmployeeById/:id",EmployeeController.deleteEmployeeDetails);

module.exports=router;