const express=require("express")
const router=express.Router()

const transactionConroller=require('../controller/transaction.Conroller')

router.route('/student')
// .get(studentConroller.getStudent)
.post(transactionConroller.createTransaction)


module.exports=router;