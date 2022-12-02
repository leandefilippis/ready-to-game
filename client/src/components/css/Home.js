import styled, { keyframes } from 'styled-components'
import { MainBlack, LowPurple, MidLowPurple } from './resources/colorPalette'

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const NavBar = styled.nav`
    height: 120px;

    display:flex;
    justify-content: space-around;

    background-image: linear-gradient(180deg, ${MainBlack}, #452838);
`
export const LeftDiv = styled.div`
    height: 130px;
    width: 50%;

    display: flex;
    flex-direction: row;
    align-items: center;
    animation: ${appear} 1s;
`

export const RightDiv = styled.div`
    height: 130px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-right: 150px;
    animation: ${appear} 1s;
`

export const StyledA = styled.a`
    color: ${LowPurple};
    width: 50px;
    height: 50px;
    border-radius: 40px 40px 40px 40px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
    position: relative;
    left: 10%;
    &:hover{
        transition: 0.2s;
        box-shadow: 0px 0px 10px 0.1px ${LowPurple};
    }
`

export const StyledAdd = styled.img`
    height: 50px;
    width: 50px;

    background-color: ${LowPurple};

    border: 15px solid ${LowPurple};
    border-radius: 40px 40px 40px 40px;
`

export const FilterDiv = styled.div`
    position: relative;
    left: 35%;
`

export const StyledSelect = styled.select`
    height: 40px;
    width: 150px;

    color: white;
    background-color: ${MainBlack};

    border: none;
    border-radius: 6px;
    border-right: 20px solid ${MainBlack};
    margin-right: 20px;
    padding-left: 15px;

    cursor: pointer;
`

export const StyledButton = styled.button`
    height: 45px;
    width: 45px;

    color: ${LowPurple};
    background: none;
    cursor: pointer;

    border: none;
    border-radius: 40px 40px 40px 40px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;

    position: relative;
    left: 40%;
    &:hover{
        transition: 0.2s;
        box-shadow: 0px 0px 10px 0.1px ${LowPurple};
    }
`

export const StyledImg = styled.img`
    height: 45px;
    width: 45px;
    background-color: ${LowPurple};

    border: 5px solid ${LowPurple};
    border-radius: 40px 40px 40px 40px;
`

export const PagesDiv = styled.div`
display:flex;
justify-content: center;
background-color: #452838;
padding-top: 50px;
height: 100px;
`

export const PageButton = styled.button`
    height: 35px;
    width: 40px;
    color: ${MainBlack};
    font-size: 20px;
    font-weight: 200;
    background: ${LowPurple};
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
    display: inline-block;
    margin-left: 4px;
    margin-right: 5.5px;
    animation: ${appear} 5s;
    &:active{
        background: white;
        color: ${MainBlack};
    }
    &:hover{
        color: black;
        cursor: pointer;
    }
`

export const BodyDiv = styled.div`
    background-color: #452838;
`

export const CardsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 2000px;
    width: 68%;
    margin: 0 auto;
    padding-top: 30px;
    animation: ${appear} 1s;
`

export const StyledH4 = styled.h4`
    color: ${MidLowPurple};
    font-family: 'Dendritic Voltage';
    font-weight: 400;
    font-size: 40px;
    position: relative;
    top: 12%;
    left: 126%;
    animation: ${appear} 2s;
`