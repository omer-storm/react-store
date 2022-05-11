const mongoose = require('mongoose');
const { Schema, model } = mongoose

const itemSchema = new Schema({
    item:  String, 
    author: String,
    price:   Number,
    image: String,
    iid: Number,
    category: String,
    quantity: Number
  });

  

module.exports =  model('Item', itemSchema);