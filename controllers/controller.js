const Modeles = require("../models/expense_model");

const defaultCon = async (req, res) => {

    const data =  await Modeles.find({});

    console.log("Data", data);
    await res.render("index.ejs", { dataList : data });
}

const expenseCon = async (req, res) => {
    
    const data = {
        type : req.body.type,
        category : req.body.category,
        description : req.body.description,
        date : req.body.date,
        amount : req.body.amount
    }

    const newDataModea = new Modeles(data);
    await newDataModea.save();
    console.log("todom", newDataModea);

    res.redirect("/");
}

const editCon = async (req, res) => {

    const {id} = req.params; 
    console.log("editeID", id);

    const editeData = await Modeles.findOne({ _id: id });

    console.log("editeData", editeData);

    res.render("addTransaction", { editeData });
}

const updateCon = async (req, res) => {
    
    const {id} = req.params;

    console.log("updateID", id);    

    const updateData = await Modeles.findByIdAndUpdate(
        {
            _id : id
        }, 
        {
            type : req.body.type,
            category : req.body.category,
            description : req.body.description,
            date : req.body.date,
            amount : req.body.amount
        },
        {
            new : true
        }
    );

    console.log("updateData", updateData);
        
    res.redirect("/");
}

const deleteCon = async (req, res) => {

    const {id} = req.params;
    console.log("DeleteID", id);
    
const deleteData = await Modeles.findByIdAndDelete(req.params.id);

    console.log("deleteData", deleteData);

    res.redirect("/");
}

module.exports = { defaultCon, expenseCon, editCon, updateCon, deleteCon }