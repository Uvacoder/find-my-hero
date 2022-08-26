import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { MainWrapper } from "components/Containers";
import { Preference, updateName, updatePreference } from "app/userSlice";

const User: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [preference, setPreference] = useState<Preference | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateName(name));
    dispatch(updatePreference(preference));
    navigate("/results");
  };
  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setName("");
    setPreference(null);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePreference = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.value === Preference.comics ||
      event.target.value === Preference.series ||
      event.target.value === Preference.stories
    ) {
      setPreference(event.target.value);
    }
  };
  return (
    <MainWrapper>
      <h2>Tell Us About You</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input
            required
            type='text'
            id='name'
            onChange={(e) => {
              handleNameChange(e);
            }}
            value={name}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>What Do You Like More</label>
          <div>
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              name='preference'
              value='comics'
              required
              checked={preference === "comics"}
            />
            Comics
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              name='preference'
              value='series'
              checked={preference === "series"}
            />
            Series
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              name='preference'
              value='stories'
              checked={preference === "stories"}
            />
            Stories
          </div>
        </div>
        <button type='reset' onClick={(e) => handleClear(e)}>
          Clear
        </button>
        <button type='submit' disabled={!name || !preference}>
          Next Step
        </button>
      </form>
    </MainWrapper>
  );
};

export default User;