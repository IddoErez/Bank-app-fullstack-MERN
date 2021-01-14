const express = require("express")
const router = express.Router()
const Transaction = require("../models/transactions")

router.get('/transactions', async (req, res) => {
    let transactions = await Transaction.find({})
    res.send(transactions)
})
router.get('/breakdown', async (req, res) => {
    Transaction.aggregate([
        {
           $group: {
              _id: "$category",
              totalAmount: {$sum:"$amount"}
           }
         }
    ]).exec((error, response) => res.send(response))
})

router.post('/transaction', async (req, res) => {
    let newTransaction = new Transaction({...req.body})
    await newTransaction.save()
    let transactions = await Transaction.find({})
    res.send(transactions)
 })
router.delete('/transaction/:id', async (req, res) => {
    let {id} = req.params
    await Transaction.findByIdAndDelete({_id: id})
    let transactions = await Transaction.find({})
    res.send(transactions)
})

module.exports = router
