// mongoose implementation
const mongoose = require('mongoose');


// mongoose model
const PokemondbStructure = mongoose.model('PokemondbStructure',{
    number: String,
    name: String,
    type_1: String,
    type_2: String,
    hp: Number,
    attack: Number,
    defense: Number,
    description: String,
    image: String
});

module.exports = PokemondbStructure;