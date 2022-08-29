import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { MainWrapper } from "components/Containers";
import {
  Preference,
  selectName,
  selectPreference,
  updateName,
  updatePreference,
} from "app/userSlice";
import { getDataByPreference } from "services/marvelRequests";
import { clearResults, updateCount, updateResults } from "app/resultsSlice";

const User: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const storedName = useAppSelector(selectName);
  const storedPreference = useAppSelector(selectPreference);
  const [name, setName] = useState<string>(storedName);
  const [preference, setPreference] = useState<Preference | null>(
    storedPreference
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateName(name));
    dispatch(updatePreference(preference));
    if (preference) {
      dispatch(clearResults);
      getDataByPreference(preference)
        .then((data) => {
          dispatch(updateCount(data.count));
          dispatch(updateResults(data.results));
        })
        .catch((error) => console.error(error));
    }
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
  useEffect(() => {}, []);
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
