const mongoose = require('mongoose');
const { Schema, model } = mongoose

const categorySchema = new Schema({
    name:  String
  });

  

module.exports =  model('Category', categorySchema);