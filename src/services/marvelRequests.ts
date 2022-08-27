import { Preference } from "app/userSlice";
import { generateMarvelParams } from "./marvelConfig";

const baseURL = "https://gateway.marvel.com:443/v1/public/";

export const getDataByPreference = async (
  preference: Preference = Preference.comics
) => {
  const authParams = generateMarvelParams();
  const request = await fetch(`${baseURL}${preference}?${authParams}`);
  const data = await request.json();
  return data;
};

export const getCharacterByURI = async (uri: string) => {
  const authParams = generateMarvelParams();
  const request = await fetch(`${uri}?${authParams}`);
  const response = await request.json();
  console.log(response);
};
