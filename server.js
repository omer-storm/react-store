const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use(express.json())

app.use('/api/items', require('./api/item'));
app.use('/api/likes', require('./api/like'));
app.use('/api/categories', require('./api/categories'));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );

