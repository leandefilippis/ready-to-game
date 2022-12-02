import styled from 'styled-components'
import { LowPurple } from './resources/colorPalette'

export const StyledInput = styled.input`
    height: 40px;
    border-radius: 12px 0px 0px 12px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
    padding-left: 20px;
    &:focus { outline-style: none;
    box-shadow: none;
    border-color: transparent;
    }
`

export const StyledButton = styled.button`
    background-color: ${LowPurple};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    &:hover{
        transition: 0.2s;
        box-shadow: 0px 0px 10px 0.1px ${LowPurple};
    }
`

export const StyledImg = styled.img`
    position: relative;
    top: 11%;
    width: 20px;
    height: 20px;
`