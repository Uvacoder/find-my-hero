import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { MainWrapper } from "components/Containers";
import { Preference, updateName, updatePreference } from "app/userSlice";
import {
  getCharacterByURI,
  getDataByPreference,
} from "services/marvelRequests";

const User: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [preference, setPreference] = useState<Preference | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateName(name));
    dispatch(updatePreference(preference));
    preference && getDataByPreference(preference);
    getCharacterByURI("http://gateway.marvel.com/v1/public/characters/1009610");
    navigate("/results");
  };
  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setName("");
    setPreference(null);
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("preference");
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
  useEffect(() => {
    const sessionStoredName = window.localStorage.getItem("name");
    if (sessionStoredName) {
      setName(sessionStoredName);
    }
    const sessionStoredPreference = window.localStorage.getItem("preference");
    if (
      sessionStoredPreference === Preference.comics ||
      sessionStoredPreference === Preference.series ||
      sessionStoredPreference === Preference.stories
    ) {
      setPreference(sessionStoredPreference);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("name", name);
    if (preference) {
      window.localStorage.setItem("preference", preference);
    }
  }, [name, preference]);
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
            pattern='[a-zA-Z]*'
          />
        </div>
        <div className='form-control'>
          <p>What Do You Like More</p>
          <div>
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              value='comics'
              id='comics'
              required
              name='preference'
              checked={preference === "comics"}
            />
            <label htmlFor='comics'>Comics</label>
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              name='preference'
              value='series'
              id='series'
              checked={preference === "series"}
            />
            <label htmlFor='series'>Series</label>
            <input
              onChange={(e) => {
                handlePreference(e);
              }}
              type='radio'
              name='preference'
              value='stories'
              id='stories'
              checked={preference === "stories"}
            />
            <label htmlFor='stories'>Stories</label>
          </div>
        </div>
        <button type='reset' onClick={(e) => handleClear(e)}>
          Clear
        </button>
        <button type='submit' disabled={!name || !preference}>
          Next
        </button>
      </form>
    </MainWrapper>
  );
};
export default User;
