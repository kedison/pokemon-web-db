const PokemondbStructure = require('../../models/pokemondbStructure');

const adminCreatev = async (req, res) => {
    const newPokemon = {
        number: req.body.number,
        name: req.body.name,
        type_1: req.body.type1,
        type_2: req.body.type2,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        description: req.body.description,
        image: req.body.image
    }

    const pokemon = await new PokemondbStructure(newPokemon).save()
    console.log("New Pokemon added: ", pokemon)
    res.redirect('/admin/index');
}

module.exports = adminCreatev;