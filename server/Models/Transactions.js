const mongoose = require("mongoose")
const Schema = mongoose.Schema
const transactionSchema = new Schema({
    amount: Number,
    vendor: String,
    category: String,
})
const Transaction = mongoose.model("transaction", transactionSchema)
const t1 = new Transaction({
    amount: 3200, vendor: "Elevation", category: "Salary"
})
const t2 = new Transaction({
   amount: -7, vendor: "Runescape", category: "Entertainment",
})
const t3 = new Transaction({
    amount: -20, vendor: "Subway", category: "Food"
})
const t4 = new Transaction({
    amount: -98, vendor: "La Baguetterie", category: "Food"
})
const transactions =[t1 ,t2, t3 ,t4]
// transactions.forEach(t=> {t.save(t)})
module.exports = Transaction





