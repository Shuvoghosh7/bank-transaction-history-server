const express=require("express")
const router=express.Router()

const transactionConroller=require('../controller/transaction.Conroller')

router.route('/transaction')
.get(transactionConroller.getAllTransaction)
.post(transactionConroller.createTransaction)


module.exports=router;