const PokemondbStructure = require('../../models/pokemondbStructure');


const adminUpdatev = async (req, res) => {
    const idToUpdate = req.params.id;
    console.log("idToUpdate: " + idToUpdate);

    const pokemon = await PokemondbStructure.findById(idToUpdate).exec();
    console.log("Pokemon: " + pokemon);
    res.render('admin/update', { pokemon })
}
module.exports = adminUpdatev;




// const adminUpdatev = async (req, res) => {
   

//     const PokemondbStructure ={
//         number: "String",
//         name: "String",
//         type_1: "String",
//         type_2: String,
//         hp: 1,
//         attack: 1,
//         defense: 1
//     }


//     res.render('admin/update', { PokemondbStructure })
// }

// module.exports = adminUpdatev;