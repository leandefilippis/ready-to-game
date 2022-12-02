import styled, { keyframes } from "styled-components";
import { LowPurple, MainBlack } from "./resources/colorPalette";

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  height: 480px;
  width: 400px;

  color: #eaeded;
  background-color: ${MainBlack};

  border-radius: 12px 12px 12px 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 3.5px 4px;

  margin-right: 20px;
  margin-bottom: 30px;

  animation: ${appear} 1s;
  &:hover {
    transition: 0.5s;
    background-color: #39323d;
    box-shadow: 0px 0px 10px 0.1px ${LowPurple};
  }
`;

export const InsetShadow = styled.div`
  height: 250px;
  width: 400px;

  border-radius: 10px 10px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px -50px 20px -20px inset;
`;

export const CardImage = styled.img`
  height: 250px;
  width: 400px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px -50px 20px -20px inset;
  object-fit: cover;
`;

export const NameRatingDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Name = styled.h3`
  display: flex;
  padding-top: 13px;
  margin-left: 35px;
  margin-top: 13px;

  width: 90%;
`;

export const Rating = styled.h5`
  height: 30px;
  width: 100px;

  display: flex;
  justify-content: center;

  color: #00a000;
  font-weight: 600;

  border: inset 2px #00a000;
  border-radius: 15px 15px 15px 15px;

  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 2px;
  padding-right: 4px;
`;

export const GenreDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 84%;
  margin-top: 50px;
  margin-left: 35px;
`;

export const Genre = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;

  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;

  border: 1px solid white;
  border-radius: 10px 10px 10px 10px;
`;
