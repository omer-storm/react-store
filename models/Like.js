const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  item: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = model("Like", itemSchema);
