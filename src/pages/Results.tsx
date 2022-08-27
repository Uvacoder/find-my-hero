import { useAppSelector } from "app/hooks";
import { selectName } from "app/userSlice";
import { FlexContainer, MainWrapper } from "components/Containers";
import React from "react";
import { Link } from "react-router-dom";

const Results: React.FC = () => {
  const name = useAppSelector(selectName);
  return (
    <MainWrapper>
      {/* Greeting */}
      {name ? (
        <div>
          Hey {name} We found {}X Results based on your preference
        </div>
      ) : (
        <div>
          Hey please <Link to='/user'>go back</Link> a step and fill in your
          information
        </div>
      )}
      <section id='results'></section>
    </MainWrapper>
  );
};

export default Results;
