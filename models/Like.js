const mongoose = require('mongoose');
const { Schema, model } = mongoose

const itemSchema = new Schema({
    "iid": Number
  });

  

module.exports =  model('Like', itemSchema);