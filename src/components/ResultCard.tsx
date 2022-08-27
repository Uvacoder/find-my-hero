import React from "react";

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
const ResultCard: React.FC<IResultCardProps> = ({
  resultThumbnail,
  resultDetails,
  characters,
}) => {
  return <div></div>;
};

export default ResultCard;
