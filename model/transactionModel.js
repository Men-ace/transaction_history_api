import transactionModel from "../schema/transactionSchema.js";

// Create a transaction
export const createTransaction = (transactionObj) => {
  return transactionModel(transactionObj).save()
}

// Get user transactions
export const getUserTransactions = (userId) => {
  return transactionModel.find({ userId })
}