const express = require("express");
const router = express.Router();
const scholarshipController = require("../controller/scholarshipController");

router.post("/addScholarship", scholarshipController.addScholarship)

router.get("/getAllScholarship", scholarshipController.getAllScholarship)

router.get("/belongTo", scholarshipController.belongTo)

router.get("/:id", scholarshipController.getOneScholarship)

router.put("/:id", scholarshipController.updateScholarship)

router.delete("/:id", scholarshipController.deleteScholarship)

module.exports = router