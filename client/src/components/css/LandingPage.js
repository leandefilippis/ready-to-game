import styled, {keyframes} from 'styled-components'
import { MainBlack } from './resources/colorPalette'

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const LandingFather = styled.div`
display:flex;
overflow-y: hidden;
overflow-x: hidden;
`

export const LandingImage = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: sepia()
`

export const LandingHeader = styled.h1`
    border: 2px;
    color: white;
    font-size: 102px;
    font-family: 'Dendritic Voltage';
    font-weight: 500;
    position: absolute;
    top: 360px;
    left: 10%;
    text-shadow:
    -4px 0px 3.5px #452838,
    4px 0px 3.5px #452838,
    0px -4px 3.5px #452838,
    0px 4px 3.5px #452838;
    animation: ${appear} 1s;
`

export const LandingButton = styled.button`
    width: 766px;
    height: 80px;

    position: absolute;
    top: 470px;
    left: 10%;

    font-size: 30px;
    font-family: 'Dendritic Voltage';
    font-weight: 100;

    cursor: pointer;
    color: white;
    background-image: linear-gradient(180deg, ${MainBlack}, #452838);

    border: 2px;
    border-radius: 0px 0px 12px 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    animation: ${appear} 1s;
    transition: 1s;
    &:hover {
    height: 95px;
    transition: 1s;
    }
`