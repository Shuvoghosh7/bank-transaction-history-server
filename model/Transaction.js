const mongoose = require("mongoose")
const validator = require("validator")


const transactionSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        require: true,
        maxLength: 100,
    },
    email: {
        type: String,
        lowercase: true,
        validator: [validator.isEmail, "Plese provide a valid Email"]
    },
    transactionDate:{
        type: Date,
        default: Date.now  
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["Deposit", "Withdrawal"],
            massage: "status value can't be {VALUE},must be Deposit/withdrawal",
        }
    },
    amount: {
        type: Number,
        require: true,
    }

})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction;