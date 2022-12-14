const { createTransactionService, getAllTransactionService } = require("../services/transaction.service")

exports.createTransaction = async (req, res) => {
    try {
        const result = await createTransactionService(req.body)
        res.status(200).json({
            stauts: "success",
            massage: "Create Data successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not inserted",
            error: error.message
        })
    }
}

exports.getAllTransaction= async (req, res) => {
    try {
        const result = await getAllTransactionService()
        res.status(200).json({
            stauts: "success",
            massage: "Get Data successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not Find",
            error: error.message
        })
    }
}