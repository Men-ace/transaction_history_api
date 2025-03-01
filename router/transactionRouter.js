import express from "express"
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js"
import { createTransaction } from "../model/transactionModel.js"

const transactionRouter = express.Router()

// POST | Create a transaction
transactionRouter.post("/", async(req, res) => {
  try {
    const transaction = await createTransaction(req.body)

    transaction?._id
      ? buildSuccessResponse(res, transaction, "Created Transaction Successfully")
      : buildErrorResponse(res, "Cannot create transaction!")
  } catch (error) {
    buildErrorResponse(res, "Cannot create transaction!")
  }
})
export default transactionRouter