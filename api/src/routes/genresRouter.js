const { Router } = require("express");
const genresRouter = Router();
const { Genre } = require('../db');
const { getGenresApi } = require('./controllers')

genresRouter.get('/', async (req,res) => {
    const genresInfo = await getGenresApi()
    genresInfo.forEach(e => {
        Genre.findOrCreate({
            where: { 
                name: e.name
            }
        })
    })
    const allGenres = await Genre.findAll()
    res.status(200).send(allGenres)
})

module.exports = genresRouter;