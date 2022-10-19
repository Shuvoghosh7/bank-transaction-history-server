const Transaction=require('../model/Transaction')

exports.createTransactionService= async(data)=>{
    const result=await Transaction.create(data)
    return result;
}
exports.getAllTransactionService=async () =>{
    const result=await Transaction.find({})
    return result;
}
