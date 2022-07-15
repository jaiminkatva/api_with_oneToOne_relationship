const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentcontroller");

router.post("/addStudent", studentController.addStudent)

router.get("/getAllStudent", studentController.getAllStudent)

router.get("/oneToone", studentController.oneToone)

router.get("/:id", studentController.getOneStudent)

router.put("/:id", studentController.updateStudent)

router.delete("/:id", studentController.deleteStudent)

module.exports = router