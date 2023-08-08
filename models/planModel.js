const mongoose = require("mongoose");

const planSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  planStart: {
    type: Date,
    required: false,
  },
  planEnd: {
    type: Date,
    required: false,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Plan= mongoose.model('Plan', planSchema)
module.exports=Plan;