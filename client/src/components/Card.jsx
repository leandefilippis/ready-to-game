import React from "react";
import {
  StyledCard,
  NameRatingDiv,
  CardImage,
  Name,
  GenreDiv,
  Genre,
  Rating,
  InsetShadow,
} from "./css/Card";

export default function Card({ id, name, image, rating, genres }) {
  return (
    <>
      <StyledCard>
        <InsetShadow>
          <CardImage src={image} alt="" width="450px" height="250px" />
        </InsetShadow>
        <NameRatingDiv>
          <Name>{name}</Name>
          <Rating>{rating}</Rating>
        </NameRatingDiv>
        {/* <GenreDiv>
          {genres?.map((e) => {
            return <Genre>{e}</Genre>;
          })}
        </GenreDiv> */}
      </StyledCard>
    </>
  );
}
