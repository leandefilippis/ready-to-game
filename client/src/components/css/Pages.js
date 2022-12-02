import styled, {keyframes} from "styled-components"
import { MainBlack, LowPurple } from './resources/colorPalette'

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const PageButton = styled.button`
    height: 35px;
    width: 40px;
    color: white;
    font-size: 20px;
    background: ${MainBlack};
    border: 1px solid ${MainBlack};
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
    display: inline-block;
    margin-left: 4px;
    margin-right: 5.5px;
    animation: ${appear} 2s;
    &:active{
        background: ${LowPurple};
        color: ${MainBlack};
    }
    &:hover{
        transition: 0.5s;
        border: 1px solid white;
        border-color: white;
        cursor: pointer;
    }
`