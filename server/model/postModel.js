const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      min: 6,
      max: 30,
    },
    description: {
      type: String,
      required: true,
      min: 10,
      max: 100,
    },
    projectlink: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
