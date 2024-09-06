const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");

router.get("/", con.defaultCon);
router.post("/expenseCon", con.expenseCon);
router.get("/editCon/:id", con.editCon);
router.post("/updateCon/:id", con.updateCon);
router.get("/deleteCon/:id", con.deleteCon);

module.exports = router;