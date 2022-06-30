const mongoose = require('mongoose');
const { Schema, model } = mongoose

const itemSchema = new Schema({
    "iid": Schema.Types.ObjectId
  });

  

module.exports =  model('Like', itemSchema);