import { Preference } from "app/userSlice";
import { generateMarvelParams } from "./marvelConfig";

const baseURL = "https://gateway.marvel.com:443/v1/public/";

export const getDataByPreference = async (
  preference: Preference = Preference.comics
) => {
  const authParams = generateMarvelParams();
  const response = await fetch(`${baseURL}${preference}?${authParams}`);
  const { data, message }: MarvelJSONResponseData = await response.json();
  if (data) {
    return data;
  } else {
    return Promise.reject(
      new Error(
        `${message ? message : "encountered an error please try again."}`
      )
    );
  }
};

export const getCharacterByURI = async (uri: string) => {
  const authParams = generateMarvelParams();
  const request = await fetch(`${uri}?${authParams}`);
  const response = await request.json();
};

export type MarvelResult = {
  characters: {
    available: number;
    items: { name: string; resourceURI: string }[];
  };
  title: string | null;
  description: string | null;
  id: number;
  thumbnail: { extension: string; path: string };
  [key: string]: any;
};

export type MarvelJSONResponseData = {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: MarvelResult[];
    total: number;
  };
  code: string | number;
  status: string;
  message?: string;
};
