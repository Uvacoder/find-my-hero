import { useAppSelector } from "app/hooks";
import { selectResults } from "app/resultsSlice";
import { Preference } from "app/userSlice";
import { MainWrapper } from "components/Containers";
import ResultCard from "components/ResultCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MarvelResult } from "services/marvelRequests";

export type StoredData = {
  count: number;
  limit: number;
  offset: number;
  results: MarvelResult[];
  total: number;
};

const parseJsonAsync = async (jsonString: string) => {
  const jsonObj = await JSON.parse(jsonString);
  return jsonObj;
};
const Results: React.FC = () => {
  const storeResults = useAppSelector(selectResults);
  const [name, setName] = useState<string>("");
  const [preference, setPreference] = useState<Preference | null>(null);
  const [results, setResults] = useState<MarvelResult[] | null>(storeResults);

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
    const sessionStoredResults = window.localStorage.getItem("results");
    if (sessionStoredResults) {
      parseJsonAsync(sessionStoredResults)
        .then((response: StoredData) => setResults(response.results))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      {/* Greeting */}
      {name && preference ? (
        <MainWrapper>
          <p>
            Hey {name} We found {}X Results based on your preference for{" "}
            {preference};
          </p>
          <section id='results'>
            {results &&
              results.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
          </section>
        </MainWrapper>
      ) : (
        <MainWrapper>
          <div>
            Hey please <Link to='/user'>go back</Link> a step and fill in your
            information
          </div>
        </MainWrapper>
      )}
    </>
  );
};

export default Results;
