import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameNames } from "../actions";
import { StyledInput, StyledButton, StyledImg } from "./css/SearchBar";
import image from './css/resources/search.png'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

function inputChangeHandler(e){
    e.preventDefault()
    setName(e.target.value)
}

function clearInput(){
    setName("")
}

function submitHandler(e){
    e.preventDefault()
    dispatch(getVideogameNames(name))
    clearInput()
}

    return(
        <div>
            <StyledInput 
                type="text"
                value={name}
                placeholder="Search by name:"
                onChange={(e) => inputChangeHandler(e)}
            />
            <StyledButton type="submit" onClick={(e) => submitHandler(e)}><StyledImg src={image} alt=''/></StyledButton>
        </div>
    )
}