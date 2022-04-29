const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
title: {
    type: String,
    required: [true, 'Please add a title']
},
ingredient: {
    type: String,
    required: [true, 'Please add an ingredient']
},
recipe: {
    type: String,
    required: [true, 'Please add a recipe']
},
img: {
    type: String,
    required: [true, 'Please add an image']
}
}) 

module.exports = mongoose.model('Menu', menuSchema)