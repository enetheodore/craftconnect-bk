const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
  },
  contentType: {
    type: String,
  },    

 data:{
    type: Buffer,
 }

},{
    timestamps: true,
});

module.exports = mongoose.model('File', fileSchema);
