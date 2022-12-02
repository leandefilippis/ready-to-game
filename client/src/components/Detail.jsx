import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "./css/resources/goback.png";
import { getVideogameDetail } from "../actions";
import {
  BodyDiv,
  Name,
  Description,
  Rating,
  Launchdate,
  Genres,
  Platforms,
  Image,
  ListsDiv,
  NlrDiv,
  StyledA,
  StyledReturn,
  DetailDiv,
  DescDiv,
  LrDiv,
  PlatformDiv,
  GenreDiv,
  GenresList,
  PlatformList,
} from "./css/Detail";

export default function VideogameDetail({ match }) {
  const dispatch = useDispatch();
  const matched = match.params.id;

  useEffect(() => {
    dispatch(getVideogameDetail(matched));
  }, [dispatch, matched]);

  const detailedVideogame = useSelector((state) => state.videogameDetail);
  
  return (
    <BodyDiv>
      <StyledA href="/home">
        <StyledReturn src={image} alt="" />
      </StyledA>
      <Image src={detailedVideogame?.image} alt={""} />
      <DetailDiv>
        <NlrDiv>
          <Name>{detailedVideogame?.name}</Name>
          <LrDiv>
            <Launchdate>
              Released in: {detailedVideogame?.launchdate}
            </Launchdate>
            <Rating>{detailedVideogame?.rating}</Rating>
          </LrDiv>

          <ListsDiv>
            <PlatformDiv>
              <PlatformList>Platforms:</PlatformList>
              {detailedVideogame?.platforms?.map((e) => {
                return <Platforms key={e}>{[e]}</Platforms>;
              })}
            </PlatformDiv>
            <GenreDiv>
              <GenresList>Genres:</GenresList>
                {detailedVideogame?.genres?.map((e) => {
                    return <Genres key={e}>{[e]}</Genres>;
                })}
            </GenreDiv>
          </ListsDiv>
        </NlrDiv>

        <DescDiv>
          <Description>{detailedVideogame?.description}</Description>
        </DescDiv>
      </DetailDiv>
    </BodyDiv>
  );
}
