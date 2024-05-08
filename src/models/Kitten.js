const mongoose = require('mongoose');
//shape database
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
