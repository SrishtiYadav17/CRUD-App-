//we need to get access to the mongoose, which is gonna help us to define the schema or structure for db
const mongoose = require('mongoose')

//create schema now 

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    tech: {
        type: String,
        required: true
    },

    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

//We need to export the schema 

module.exports = mongoose.model('Alien', alienSchema)