import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, sortByName, sortByRating, filterVideogamesByGenre, filterVideogamesByCreation, clearDetail } from '../actions'
import Card from "./Card";
import Pages from "./Pages";
import SearchBar from "./SearchBar";
import { NavBar, LeftDiv, RightDiv, StyledButton, StyledH4, StyledImg, CardsDiv, FilterDiv, StyledA, StyledSelect, BodyDiv, StyledAdd, PagesDiv, PageButton} from "./css/Home";
import image from './css/resources/refresh.png'
import image2 from './css/resources/add.png'

export default function Home(){
    const [,setRender] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage] = useState(15)

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.currentVideogames)
    const allGenres = useSelector((state) => state.genres)
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const nextPage = () => {
        if (currentPage < 7)
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage > 1)
        setCurrentPage(currentPage - 1)
    }

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGenres())
        dispatch(clearDetail())
    },[dispatch])

    function clickHandler(e){
        e.preventDefault()
        dispatch(getVideogames())
        dispatch(getGenres())
    }

    function orderHandler(e){
        e.preventDefault()
        setCurrentPage(1)
        dispatch(sortByName(e.target.value))
        setRender(`Ordenado ${e.target.value}`)
    }

    function ratingHandler(e){
        e.preventDefault()
        setCurrentPage(1)
        dispatch(sortByRating(e.target.value))
        setRender(`Ordenado ${e.target.value}`)
    }

    function genreFilterHandler(e){
        setCurrentPage(1)
        dispatch(filterVideogamesByGenre(e.target.value))
    }

    function creationFilterHandler(e){
        setCurrentPage(1)
        dispatch(filterVideogamesByCreation(e.target.value))
    }

    return(
        <>
            <NavBar>
                <LeftDiv>
                    <StyledA href='/postvideogame'><StyledAdd src={image2} alt=''/></StyledA>
                    <FilterDiv>
                        <StyledSelect onChange={e => orderHandler(e)}>
                            <option hidden>Order</option>
                            <option value="Forward">A to Z</option>
                            <option value="Backward">Z to A</option>
                        </StyledSelect>
                        <StyledSelect onChange={e => ratingHandler(e)}>
                            <option hidden>Rating</option>
                            <option value="Forward">Higher</option>
                            <option value="Backward">Lower</option>
                        </StyledSelect>
                        <StyledSelect onChange={e => genreFilterHandler(e)}>
                            <option hidden>Genre</option>
                            <option value="All">All</option>
                            {allGenres.map(e => {
                                return(<option value={e.name} key={e.id}>{e.name}</option>)
                            })}
                        </StyledSelect>
                        <StyledSelect onChange={e => creationFilterHandler(e)}>
                            <option hidden>Origin</option>
                            <option value="All">All</option>
                            <option value="Created">Created</option>
                            <option value="Api">Existing</option>
                        </StyledSelect>
                    </FilterDiv>
                    <StyledButton onClick={e => {clickHandler(e)}}><StyledImg src={image} alt=''/></StyledButton>
                </LeftDiv>

                <RightDiv>
                    <SearchBar />
                </RightDiv>
            </NavBar>

            <PagesDiv>
                <PageButton onClick={prevPage}>{"<"}</PageButton>
                <Pages 
                    videogamesPerPage = {videogamesPerPage}
                    allVideogames = {allVideogames.length}
                    pages = {pages}
                />
                <PageButton onClick={nextPage}>{">"}</PageButton>
            </PagesDiv>
            
            <BodyDiv>
            <CardsDiv>
            {
            currentVideogames === "404"?
                <StyledH4>Not found!</StyledH4> : currentVideogames.length? currentVideogames.map((e) => {
                    return(
                        <Link to={'/videogame/'+ e.id} style={{textDecoration:'none', color:'white'}} key={e.id}>
                            <Card 
                            name={e.name}
                            genres={e.genres}
                            rating={e.rating}
                            image={e.image}
                            />
                        </Link>
                    )
                }) : <StyledH4>Cargando...</StyledH4>
            }
            </CardsDiv>
            </BodyDiv>
        </>
    )
}