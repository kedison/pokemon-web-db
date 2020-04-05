const PokemondbStructure = require('../models/pokemondbStructure');

const homev = async (req, res) => {
    const pokemondb = await PokemondbStructure.find().sort('number').exec();
    res.render('home', { pokemondb })
}

module.exports = homev;