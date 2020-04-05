
const PokemondbStructure = require('../../models/pokemondbStructure');

const indexv = async (req, res) => {
    // const pokemondb = await PokemondbStructure.find().exec(); no sort just regular ID sort by a-z
    const pokemondb = await PokemondbStructure.find().sort({"_id":-1}).exec();

    
    res.render('admin/index', { pokemondb })

}

module.exports = indexv;


