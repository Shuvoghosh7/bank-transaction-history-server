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
    transactionId:{
        type: String,
        trim: true,
        require: true,
        unique: [true, "Name must be Unique"],
    },
    amount:{
        type: Number,
        require: true,
    }

},{
    timestamps: true
})

const Transaction=mongoose.model("Transaction",transactionSchema)
module.exports=Transaction;