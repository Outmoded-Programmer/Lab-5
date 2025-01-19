const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  food: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
});
module.exports = mongoose.model("Category", categorySchema);
