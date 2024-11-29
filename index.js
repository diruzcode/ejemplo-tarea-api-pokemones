const express = require('express')
const authRoute = require('./routes/auth.route')
const pokemonRoute = require('./routes/pokemon.route')


const app = express();

app.use(express.json());

app.use('/auth', authRoute);
app.use('/pokemon', pokemonRoute)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Mi api pokedex")
})