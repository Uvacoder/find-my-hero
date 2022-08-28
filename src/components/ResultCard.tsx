import React from "react";
import { MarvelResult } from "services/marvelRequests";
import styled from "styled-components";
import { FlexContainer } from "./Containers";

interface IResultCardProps {
  result: MarvelResult;
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
const ResultCard: React.FC<IResultCardProps> = ({ result }) => {
  const {
    characters: { available, items },
    title,
    description,
    thumbnail: { path, extension },
  } = result;
  return (
    <Result>
      {/* Result Thumbnail */}
      <div>
        <img src={`${path}.${extension}`} alt='' />
      </div>
      {/* Result Details - title + description - */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {/* Character Row -scrollable x axis - */}
      <div className='characters'>
        <h3>Featuring {available} heros</h3>
        <FlexContainer scrollable={"x"}>
          {items.map((character, index) => (
            <CharacterCard key={index}>
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
