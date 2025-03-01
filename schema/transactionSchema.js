import mongoose from "mongoose";


const transactionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'expense',
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  }
})

const transactionModel = mongoose.model("transaction", transactionSchema)
export default transactionModel