import md5 from "md5";

export const generateMarvelParams = () => {
  const timestamp = new Date().getTime();
  const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY!;
  const private_key = process.env.REACT_APP_MARVEL_PRIVATE_KEY!;
  const hash = md5(timestamp + private_key + public_key).toString();
  return `ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
};
