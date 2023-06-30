const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    maxLength: 30,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: Array,
    default: [],
  },
  sold: {
    type: Number,
    default: 0,
  },
  continents: {
    type: Number,
    default: 1,
  },
  view: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("Product", productSchema);

module.exports = Product;
