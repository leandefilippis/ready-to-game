import styled, {keyframes} from 'styled-components'
import { MainBlack, LowPurple, MidLowPurple } from './resources/colorPalette'

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const FormDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(180deg, #201b23, #6b4a56);
`

export const StyledForm = styled.form`
width: 1500px;
height: 750px;
display: flex;
flex-direction: row;
background-image: linear-gradient(180deg, ${MidLowPurple}, ${LowPurple});
padding-top: 70px;
padding-left: 100px;
border-radius: 20px 20px 20px 20px;
box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
animation: ${appear} 3s;
`

export const StyledA = styled.a`
    height: 70px;
    width: 70px;
    position: fixed;
    top: 4.5%;
    left: 4%;
    background-color: none;
    border-radius: 40px 40px 40px 40px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;
    animation: ${appear} 3s;
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
    top: 4.5%;
`

export const LeftDiv = styled.div`
width: 50%;
height: 1000px;
`

export const RightDiv = styled.div`
width: 50%;
height: 1000px;
`

export const StyledLabel = styled.label`
    color: ${MainBlack};
    font-size: 30px;
    font-weight: 600;
    padding-right: 30px;
    padding-bottom: 10px;
`

export const ErrorH1 = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 100;
    margin-top: 5px;
    margin-left: 10px;
`

export const NameInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
`

export const NameInput = styled.input`
    height: 60px;
    width: 550px;

    color: white;
    background-color: ${MainBlack};

    font-size: 30px;

    border: none;
    border-radius: 6px;
    padding-left: 15px;
`

export const DescriptionInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 340px;
`

export const DescriptionInput = styled.textarea`
    display: flex;

    min-height: 250px;
    max-height: 250px;
    min-width: 600px;
    max-width: 600px;

    color: white;
    background-color: ${MainBlack};

    font-family: Arial, Helvetica, sans-serif;

    border: none;
    border-radius: 6px;
    padding-left: 15px;
    padding-top: 15px;
    &:-webkit-autofill{
        background-color: ${MainBlack}!important;
        color: white!important;
    } 
    &autofill{
        background-color: ${MainBlack}!important;
        color: white!important;
    }
`

export const RateInputDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const RateInput = styled.input`
    height: 40px;
    width: 200px;

    color: white;
    background-color: ${MainBlack};

    border: none;
    border-radius: 6px;
    border-right: 20px solid ${MainBlack};
    margin-right: 20px;
    padding-left: 15px;
`

export const LRDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const LaunchInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-bottom: 40px;
`

export const LaunchInput = styled.input`
    height: 40px;
    width: 200px;

    color: white;
    background-color: ${MainBlack};

    border: none;
    border-radius: 6px;
    border-right: 20px solid ${MainBlack};
    margin-right: 20px;
    padding-left: 15px;
`

export const ImageInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

export const ImageInput = styled.input`
    height: 40px;
    width: 600px;

    color: white;
    background-color: ${MainBlack};

    border: none;
    border-radius: 6px;
    border-right: 20px solid ${MainBlack};
    margin-right: 20px;
    padding-left: 15px;
`

export const PlatSelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 300px;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    height: 130px;
    width: 300px;
    position: relative;
    left: 21%;
    bottom: 2%;
`

export const StyledButton = styled.button`
    height: 50px;
    width: 300px;

    color: white;
    font-weight: 600;
    background-color: ${MainBlack};
    cursor: pointer;

    border: none;
    border-radius: 10px 10px 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;

    &:disabled{
        background-color: #ff4d4d;
        color: white;
    }
`

export const StyledSelect = styled.select`
    height: 50px;
    width: 260px;
    margin-bottom: 40px;

    color: white;
    background-color: ${MainBlack};

    border: none;
    border-radius: 6px;
    border-right: 20px solid ${MainBlack};
    padding-left: 15px;

    cursor: pointer;
`

export const GenreSelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
    height: 300px;
`

export const StyledH1 = styled.h1`
    font-family: 'Dendritic Voltage';
    font-weight: 300;
    font-size: 60px;
    color: ${LowPurple};
    position: relative;
    bottom: 3%;
`

export const StyledH5 = styled.h5`
    font-size: 25px;
    color: ${MainBlack};
    margin-left: 10px;
    margin-right: 10px;
`

export const RemoveButton = styled.button`
    height: 25px;
    width: 25px;

    color: white;
    background-color: #ff4d4d;

    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const SelectedOption = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

export const LeftSelectorDiv = styled.div`
display:flex;
flex-direction: row;
margin-top: 15px;
`