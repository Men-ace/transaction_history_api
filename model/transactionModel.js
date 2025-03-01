import transactionModel from "../schema/transactionSchema.js";

// Create a transaction
export const createTransaction = (transactionObj) => {
  return transactionModel(transactionObj).save()
}