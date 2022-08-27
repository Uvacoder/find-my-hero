import React from "react";
import styled from "styled-components";
import { FlexContainer } from "./Containers";

type ResultDetails = {
  title: string;
  description: string;
};
type CharacterResponse = {
  name: string;
  resourceURI: string;
};
interface IResultCardProps {
  resultThumbnail: string;
  resultDetails: ResultDetails;
  characters: CharacterResponse[];
}

const Result = styled.div`
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  .characters {
    grid-column: 1 / span 2;
  }
`;
const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ResultCard: React.FC<IResultCardProps> = ({
  resultThumbnail,
  resultDetails,
  characters,
}) => {
  return (
    <Result>
      {/* Result Thumbnail */}
      <div>
        <img src={resultThumbnail} alt='' />
      </div>
      {/* Result Details - title + description - */}
      <div>
        <h3>{resultDetails.title}</h3>
        <p>{resultDetails.description}</p>
      </div>
      {/* Character Row -scrollable x axis - */}
      <div className='characters'>
        <h3>Featuring</h3>
        <FlexContainer scrollable={"x"}>
          {characters.map((character) => (
            <CharacterCard>
              <img src='' alt='' />
              <p>{character.name}</p>
            </CharacterCard>
          ))}
        </FlexContainer>
      </div>
    </Result>
  );
};

export default ResultCard;
