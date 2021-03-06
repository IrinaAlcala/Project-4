const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  name: {type: String, required: true},
  price: Number,
  comment: String,
  
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Wishlist', wishlistSchema);