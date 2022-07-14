const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, trim: true, required: true },
    age: Number,
    email: String,
    favoriteFoods: [String],
})

module.exports = Person = mongoose.model('person', personSchema)  