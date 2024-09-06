const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/expense_tracker")
.then(() => console.log("Database Connected.....!"))
.catch(() => {
    console.log("Database Not Connected.....!");
});