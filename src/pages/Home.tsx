import { Button } from "components/Buttons";
import { MainWrapper } from "components/Containers";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/user");
  };
  return (
    <MainWrapper>
      <Button onClick={() => handleStart()}>Start</Button>
    </MainWrapper>
  );
};

export default Home;
