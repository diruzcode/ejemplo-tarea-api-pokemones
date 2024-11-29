const express = require('express')
const router = express.Router();
const pokemonController =  require('./../controllers/pokemon.controller')

router.get("/", pokemonController.get)
router.post("/", pokemonController.create)

module.exports = router;