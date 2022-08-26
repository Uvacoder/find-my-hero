import { MainWrapper } from "components/Containers";
import React from "react";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/results");
  };
  return (
    <MainWrapper>
      <h2>Tell Us About You</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>What Do You Like More</label>
          <div>
            <input type='radio' name='preference' value='comics' />
            Comics
            <input type='radio' name='preference' value='series' />
            Series
            <input type='radio' name='preference' value='stories' />
            Stories
          </div>
        </div>
        <button type='submit'>Next Step</button>
      </form>
    </MainWrapper>
  );
};

export default User;
