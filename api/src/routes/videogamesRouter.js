const { Router } = require("express");
const videogamesRouter = Router();
const {Videogame, Genre} = require('../db');
const { getAllVideogames, getVideogameDetail } = require('./controllers')

videogamesRouter.get('/', async (req,res) => {
    const { name } = req.query
    const allVideogames = await getAllVideogames()
    if (name) {
        const searchedVideogame = allVideogames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
        searchedVideogame.length?
        res.status(200).send(searchedVideogame) :
        res.status(404).send("Videogame name not found")
    } else {
        res.status(200).send(allVideogames)
    }
})

videogamesRouter.get('/:id', async (req,res) => {
    const { id } = req.params
    const videogamesDetail = await getVideogameDetail(id)
    if(videogamesDetail) return res.status(200).send(videogamesDetail)
    return res.status(404).send("Videogame id not found")
    }
)

videogamesRouter.post('/', async (req,res) => {
    let {
        name,
        description,
        image,
        launchdate,
        rating,
        platforms,
        genres,
        createdInDb
    } = req.body

    try {
        let newVideogame = await Videogame.creat({
            name,
            description,
            image,
            launchdate,
            rating,
            platforms,
            createdInDb
        })
    
        let findGenre = await Genre.findAll({
            where: {name: genres}
        })

        newVideogame.addGenre(findGenre)
        res.status(200).send(newVideogame)
    } catch (err) {
        res.status(404).send({err: "Videogame was not created"})
    }
})

module.exports = videogamesRouter;