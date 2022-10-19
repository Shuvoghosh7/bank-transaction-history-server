const Transaction=require('../model/Transaction')

exports.createTransactionService= async(data)=>{
    const result=await Transaction.create(data)
    return result;
}

