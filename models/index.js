const mongoose = require("mongoose");

(async()=> {
    await mongoose.connect('mongodb://localhost:27017/react-store');
    })();
    
 
module.exports = {
    Item: require('./Item'),
    Like: require('./Like')
}