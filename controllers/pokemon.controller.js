const pokemonService = require('../services/pokemon.services')


create = (req, res) => {
    pokemonService.createPokemon(req.body)
    res.status(201).json({ status: 'sucess' })
}

get = (req, res) => {
    const pokemons = pokemonService.getAllPokemons()
    res.status(200).json({
        status: 'sucess',
        data: {
            pokemons
        }
    })
}

module.exports = {
    get,
    create
};