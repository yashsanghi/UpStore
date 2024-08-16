var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 32,
      trim: true,
      default: null
    },
    phoneNumber: {
      type: Number,
      trim: true,
      index: {
        sparse: true,
        unique: true
      },
      default: null
    },
    address: {
      type: String,
      trim: true
    },
    pushToken: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
