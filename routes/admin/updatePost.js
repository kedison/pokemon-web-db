const PokemondbStructure = require('../../models/pokemondbStructure');

const adminUpdatev = async (req, res) => {

    const idToUpdate = req.body.id;

    const updatePokemon = {
        number: req.body.number,
        name: req.body.name,
        type_1: req.body.type1,
        type_2: req.body.type2,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        description: req.body.description,
        image: req.body.image
    };

    let filter = { _id: idToUpdate };

    let pokemon = await PokemondbStructure.updateOne(filter, updatePokemon).exec();
    console.log("Pokemon updated: " + pokemon);

    res.redirect('/admin/index');
}

module.exports = adminUpdatev;