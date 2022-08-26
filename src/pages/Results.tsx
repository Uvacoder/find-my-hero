import { useAppSelector } from "app/hooks";
import { selectName } from "app/userSlice";
import { FlexContainer, MainWrapper } from "components/Containers";
import React from "react";

const Results: React.FC = () => {
  const name = useAppSelector(selectName);
  return (
    <MainWrapper>
      {/* Greeting */}
      <div>
        Hey {name} We found {}X Results based on your preference
      </div>
      <section id='results'>
        <FlexContainer scrollable='y'></FlexContainer>
      </section>
    </MainWrapper>
  );
};

export default Results;
