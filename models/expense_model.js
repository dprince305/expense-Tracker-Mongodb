const mongoose = require('mongoose');


const expenseSchema = mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const TransactionModel = mongoose.model('Expense', expenseSchema);

module.exports = TransactionModel;