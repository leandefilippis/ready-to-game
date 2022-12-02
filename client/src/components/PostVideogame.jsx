import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { postVideogame, getGenres, getPlatforms } from "../actions";
import { FormDiv, StyledForm, LeftDiv, RightDiv, LRDiv, SelectedOption, StyledA, ErrorH1, StyledSelect, StyledLabel, StyledReturn, NameInputDiv, NameInput, DescriptionInputDiv, DescriptionInput, RateInputDiv, RateInput, LaunchInputDiv, LaunchInput, ImageInputDiv, ImageInput, PlatSelectDiv, ButtonDiv, GenreSelectDiv, StyledButton, StyledH5, StyledH1, RemoveButton, LeftSelectorDiv } from "./css/PostVideogames";
import image from "./css/resources/goback.png";

const initialState = {
    name: "",
    description: "",
    launchdate: "",
    image: "",
    rating: "",
    platforms: [],
    genres: []
}

export default function PostVideogame(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allGenres = useSelector((state) => state.genres)
    const allPlatforms = useSelector((state) => state.platforms)
    const [input, setInput] = useState(initialState)
    const [error, setError] = useState(initialState)

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    function submitHandler(e){
        e.preventDefault()
                dispatch(postVideogame(input))
                setInput({
                    name: "",
                    description: "",
                    launchdate: "",
                    image: "",
                    rating: "",
                    platforms: [],
                    genres: []
                })
                // console.log(input)
                // if(input === "Videogame was not created"){
                // } else { alert("Videogame created!") }
                history.push('/home')     
    }

    function genreSelectHandler(e){
        if(input.genres.length < 4){
            if(!input.genres.includes(e.target.value)){
                setInput({
                    ...input,
                    genres: [...input.genres, e.target.value]
                })
            }
        }
    }

    function platformSelectHandler(e){
        if(!input.platforms.includes(e.target.value)){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
        }
    }

    function deselectHandler(e){
        setInput({
            ...input,
            genres: [...input.genres.filter(selected => selected !== e)],
            platforms: [...input.platforms.filter(selected => selected !== e)]
        })
    }

    function inputChangeHandler(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function inputValidate(e){
        e.preventDefault()
        let {name} = e.target
        if(name === "name"){
            if(/^\s/.test(e.target.value) || e.target.value === ""){
                setError({...error, [name]: "Invalid name!"})
            } else {
                setError({...error, [name]: ""})
            }
        }
        if(name === "description"){
            if(/^\s/.test(e.target.value) || e.target.value === ""){
                setError({...error, [name]: "Invalid description!"})
            } else {
                setError({...error, [name]: ""})
            }
        }
        if(name === "rating"){
            if(/^\s/.test(e.target.value) || e.target.value > 5 || !/(^[0-5]\d*(\.\d+)?$)/.test(e.target.value) || !/^\d+(?:\.\d{1,2})?$/.test(e.target.value) || e.target.value === ""){
                setError({...error, [name]: "Invalid rating!"})
            } else {
                setError({...error, [name]: ""})
            }
        }
        if(name === "image"){
            if(/^\s/.test(e.target.value) || !/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/ig.test(e.target.value) || e.target.value === ""){
                setError({...error, [name]: "Invalid Url!"})
            } else {
                setError({...error, [name]: ""})
            }
        }
        if(name === "launchdate"){
            if(e.target.value.length > 10 || Number(e.target.value.slice(0,4)) > 2022){
                setError({...error, [name]: "Invalid launchdate!"})
            } else {
                setError({...error, [name]: ""})
            }
        }
    }
    
    return(
        <FormDiv>
            <StyledA href="/home">
                <StyledReturn src={image} alt="" />
            </StyledA>
            <StyledH1>Post your own videogame!</StyledH1>
            <StyledForm onSubmit={submitHandler}>
                <LeftDiv>
                    <NameInputDiv>
                        <StyledLabel>Name:</StyledLabel>
                        <NameInput type="text" key="name" name="name" placeholder="..." value={input.name} onChange={(e) => {inputChangeHandler(e)
                        inputValidate(e)}} />
                            <ErrorH1>{error.name}</ErrorH1>
                    </NameInputDiv>
                    
                    <LRDiv>
                        <LaunchInputDiv>
                            <StyledLabel>Launchdate:</StyledLabel>
                            <LaunchInput type="date" key="launchdate" name="launchdate" placeholder="launchdate" value={input.launchdate} onChange={(e) => {inputChangeHandler(e)
                            inputValidate(e)}} />
                                <ErrorH1>{error.launchdate}</ErrorH1>
                        </LaunchInputDiv>

                        <RateInputDiv>
                            <StyledLabel>Rating:</StyledLabel>
                            <RateInput type="text" key="rating" name="rating" placeholder="0.01 to 5.00" value={input.rating} onChange={(e) => {inputChangeHandler(e)
                            inputValidate(e)}} />
                                <ErrorH1>{error.rating}</ErrorH1>
                        </RateInputDiv>
                    </LRDiv>

                    <LeftSelectorDiv>
                        <GenreSelectDiv>
                            <StyledLabel>Genres:</StyledLabel>
                            <StyledSelect onChange={(e) => genreSelectHandler(e)}>
                                <option hidden>Select up to 4 genres</option>
                            {allGenres?.map(e => {
                                return(<option value={e.name} key={e.name}>{e.name}</option>)
                            })}
                            </StyledSelect>
                            {input.genres?.map(e => 
                                <SelectedOption>
                                    <StyledH5>{e}</StyledH5>
                                    <RemoveButton type="button" key="deleteButton" className="deleteButton" onClick={() => deselectHandler(e)}>x</RemoveButton>
                                </SelectedOption>
                            )}
                        </GenreSelectDiv>

                        <PlatSelectDiv>
                            <StyledLabel>Platforms:</StyledLabel>
                            <StyledSelect onChange={(e) => platformSelectHandler(e)}>
                                <option hidden>Select your platforms</option>
                            {allPlatforms?.map(e => {
                                return(<option value={e} key={e.name}>{e}</option>)
                            })}
                            </StyledSelect>
                            {input.platforms?.map(e => 
                                <SelectedOption>
                                    <StyledH5>{e}</StyledH5>
                                    <RemoveButton type="button" key="deleteButton" className="deleteButton" onClick={() => deselectHandler(e)}>x</RemoveButton>
                                </SelectedOption>
                            )}
                        </PlatSelectDiv>
                    </LeftSelectorDiv>
                </LeftDiv>
                
                <RightDiv>
                    <DescriptionInputDiv>
                        <StyledLabel>Description:</StyledLabel>
                        <DescriptionInput type="text" key="description" name="description" placeholder="..." value={input.description} onChange={(e) => {inputChangeHandler(e)
                        inputValidate(e)}} />
                            <ErrorH1>{error.description}</ErrorH1>
                    </DescriptionInputDiv>

                    <ImageInputDiv>
                        <StyledLabel>Image:</StyledLabel>
                        <ImageInput type="text" key="image" name="image" value={input.image} placeholder="URL:" onChange={(e) => {inputChangeHandler(e)
                        inputValidate(e)}} />
                            <ErrorH1>{error.image}</ErrorH1>
                    </ImageInputDiv>
                    
                    <ButtonDiv>
                    <StyledButton type="submit" disabled={(!input.name || !input.launchdate || !input.rating || !input.image || !input.description || !input.platforms.length || !input.genres.length || error.name || error.description || error.rating || error.image)? true : false}>POST MY VIDEOGAME!</StyledButton>
                    </ButtonDiv>
                </RightDiv>
            </StyledForm>
        </FormDiv>
    )
}