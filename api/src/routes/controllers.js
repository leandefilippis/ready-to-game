const axios = require('axios');
const apiKey = '326be3a7b7f64220a1d1fbf9bcf3f88c';
const {Videogame, Genre} = require('../db');

const getVideogamesApi = async () => {
    let videogamesInfo = []
    for (let i = 1; i < 6; i++) {
        await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${i}`)
            .then(res => res.data.results.map((e) => {
                const videogamesModel = {
                    id: e.id,
                    name: e.name,
                    launchdate: e.released,
                    rating: e.rating,
                    image: e.background_image,
                    platforms: e.platforms.map(e => {
                        let platforms = e.platform.name
                        return platforms
                    }),
                    genres: e.genres.map(e => {
                        let genres = e.name
                        return genres
                    })
                }
                videogamesInfo.push(videogamesModel)
            }))
    }
    return videogamesInfo
}

const getDatabaseInfo = async () => {
    let databaseInfo = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }   
    })

    let formatData = databaseInfo.map((e) => {
        let tempArr = [];

    e.genres.map((e) => {
        tempArr.push(e.name)
    })

    const dataArr = new Set(tempArr);
    let result = [...dataArr];
    return {
        id: e.id,
        name: e.name,
        launchdate: e.launchdate,
        rating: e.rating,
        image: e.image,
        description: e.description,
        platforms: e.platforms,
        genres: result,
        createdInDb: e.createdInDb
        }
    })
    return formatData
}

const getAllVideogames = async () => {
    const videogamesApi = await getVideogamesApi()
    const databaseInfo = await getDatabaseInfo()
    const allVideogames = videogamesApi.concat(databaseInfo)
    return allVideogames
}

const getVideogameDetail = async (id) => {
    const databaseInfo = await getDatabaseInfo()
    const databaseById = databaseInfo.find(e => e.id === id)
    if(databaseById){
        const videogamesModel = {
            id: databaseById.id,
            name: databaseById.name,
            launchdate: databaseById.launchdate,
            rating: databaseById.rating,
            image: databaseById.image,
            description: databaseById.description,
            platforms: databaseById.platforms,
            genres: databaseById.genres
        }
    return videogamesModel
    } else {
    const apiDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
        .then(response => response.data)
            const videogamesModel = {
                id: apiDetail.id,
                name: apiDetail.name,
                launchdate: apiDetail.released,
                rating: apiDetail.rating,
                image: apiDetail.background_image,
                description: apiDetail.description_raw,
                platforms: apiDetail.platforms.map(e => {
                    let platforms = e.platform.name
                    return platforms
                }),
                genres: apiDetail.genres.map(e => {
                    let genres = e.name
                    return genres
                })
            }
        return videogamesModel
    }
}

const getGenresApi = async () => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`)
    const genresInfo = await genresApi.data.results.map(e => {
        return {
            name: e.name,
        }
    })
    return genresInfo
}

module.exports = {
    getAllVideogames,
    getVideogameDetail,
    getGenresApi,
}