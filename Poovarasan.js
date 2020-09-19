// var fName = "Poo";
// var mName = "varasan";
// var lName = "S";

// var fullName = `${fName}${mName}.${lName}`;
// console.log(fullName);
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  _id: [mongoose.Schema.Types.ObjectId],
  product_name: { type: String, required: true },
  price: { type: Number, required: true },
  offer: { type: Number, required: true },

  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  product_count: {
    s: { type: Number, required: true },
    m: { type: Number, required: true },
    l: { type: Number, required: true },
    xl: { type: Number, required: true },
    xxl: { type: Number, required: true },
  },
  description: { type: String, required: true },
  timestamp: { type: TimeRanges, required: true },
  product_image: { type: String, required: true },

  ratings: {
    total_rating: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  sold_by: [mongoose.Schema.Types.ObjectId],
  solder_name: { type: String, required: true },

  //productDescriptionReviews: { type: String, required: true },
});
module.exports = mongoose.model("poovarasan", ProductSchema);
