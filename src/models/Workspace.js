const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    firstLine: String,
    secondLine: String,
    postcode: String,
    city: String,
    country: String,
  },
  details: {
    email: String,
    number: String,
  },
  cost: {
    type: Number,
    required: true,
  },
  amenities: [String],
  reviews: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    comment: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Workspace', workspaceSchema);
