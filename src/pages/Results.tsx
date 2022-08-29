import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectResults, updateCount, updateResults } from "app/resultsSlice";
import { Preference, selectName, selectPreference } from "app/userSlice";
import { MainWrapper } from "components/Containers";
import ResultCard from "components/ResultCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataByPreference, MarvelResult } from "services/marvelRequests";

export type StoredData = {
  count: number;
  limit: number;
  offset: number;
  results: MarvelResult[];
  total: number;
};

const Results: React.FC = () => {
  const name = useAppSelector(selectName);
  const preference = useAppSelector(selectPreference);
  const results = useAppSelector(selectResults);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (results) {
      return;
    } else {
      if (name && preference) {
        getDataByPreference(preference)
          .then((data) => {
            dispatch(updateCount(data.count));
            dispatch(updateResults(data.results));
          })
          .catch((error) => console.error(error));
      }
    }
  }, [dispatch, name, preference, results]);
  return (
    <MainWrapper>
      {name === "" || preference === null ? (
        <div>
          Hey please <Link to='/user'>go back</Link> a step and fill in your
          information
        </div>
      ) : !results ? (
        <div>Loading</div>
      ) : (
        <div>
          hey {name} we found {results.length} results based on your preference
          for {preference}
          <section className='results'>
            {results.map((result) => (
              <ResultCard result={result} />
            ))}
          </section>
        </div>
      )}
    </MainWrapper>
  );
};

export default Results;
