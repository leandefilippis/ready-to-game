import styled, {keyframes} from 'styled-components'
import { LowPurple, MainBlack, MainPurple } from './resources/colorPalette'

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const BodyDiv = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 1900px;
    min-height: 1440px;
    margin: 0 auto;
`

export const Image = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: relative;
    z-index: -2;
    animation: ${appear} 3s;
`

export const StyledA = styled.a`
    height: 70px;
    width: 70px;
    position: fixed;
    top: 2.5%;
    left: 2%;
    background-color: none;
    border-radius: 40px 40px 40px 40px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
    animation: ${appear} 1s;
    &:hover{
        transition: 0.2s;
        box-shadow: 0px 0px 10px 0.1px ${LowPurple};
    }
`

export const StyledReturn = styled.img`
    height: 70px;
    width: 70px;

    background-color: ${LowPurple};

    border: 15px solid ${LowPurple};
    border-radius: 40px 40px 40px 40px;

    position: fixed;
    top: 2.5%;

    animation: ${appear} 1s;
`

export const DetailDiv = styled.div`
    background-image: linear-gradient(180deg, ${MainPurple}, ${MainBlack});
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 50%;
    height: 50vh;
    width: 1920px;
    animation: ${appear} 1s;
`

export const NlrDiv = styled.div`
    height: inherit;
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 12%;
    left: 4%;
`

export const LrDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Name = styled.h1`
    color: white;
    font-family: "Crimson Text",serif;
    font-size: 70px;
`

export const Launchdate = styled.h5`
    width: 400px;
    color: ${LowPurple};
    font-size: 35px;
    position: relative;
    left: 5%;
`

export const Rating = styled.h5`
    height: 40px;
    width: 70px;
    background-color: rgba(202, 162, 179, 0.3);

    color: white;
    font-weight: 600;
    font-size: 20px;

    border: inset 4px ${LowPurple};
    border-radius: 30px 30px 30px 30px;

    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 15%;

    margin-top: 3px;
    padding-bottom: 5px;
    padding-right: 2.5px;
`

export const DescDiv = styled.div`
    position: relative;
    top: 12%;
    width: 55%;
    height: inherit;
    display: flex;
    flex-direction: row;
`

export const Description = styled.h5`
    height: inherit;
    width: 1000px;
    color: ${LowPurple};
    font-size: 22px;
    margin-left: 40px;
`


export const ListsDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    position: relative;
    top: 5%;
    left: 12%;
`

export const GenresList = styled.h1`
    color:white;
`

export const PlatformList = styled.h1`
    color:white;
`

export const GenreDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const PlatformDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`

export const Platforms = styled.h5`
color: ${LowPurple};
font-size: 20px;
margin-left: 25px;
`

export const Genres = styled.h5`
color: ${LowPurple};
font-size: 20px;
margin-left: 25px;
`