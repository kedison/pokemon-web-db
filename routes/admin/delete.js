const PokemondbStructure = require('../../models/pokemondbStructure');


const adminDeletev = async (req, res) => {
    const idToDelete = req.params.id;
    console.log("idToDelete: " + idToDelete);
    const pokemon = await PokemondbStructure.deleteOne({ _id: idToDelete }).exec();
    console.log("Pokemon deleted: " + pokemon);
    res.redirect('/admin/index')
}

module.exports = adminDeletev;