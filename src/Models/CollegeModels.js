const mongoose = require("mongoose");

const collegeModel = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      lowercase: true
   },
   fullName: {
      type: String,
      required: true
   },
   LogoLink: {
      type: String,
      required: true
   },
   isDeleted: {
      type: Boolean,
      default: false
   }

})

module.exports = mongoose.model('College', collegeModel)