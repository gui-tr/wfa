const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    firstLine: {
      type: String,
      required: true,
    },
    secondLine: {
      type: String,
    },
    postcode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
    },
  },
  details: {
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  cost: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  reviews: [{
    user: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  }],
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;
