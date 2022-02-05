import { customMemoization } from "./customMemoization";

export const getGifs = customMemoization(async (category) => {
  const apiKey = "gXsfPNJlsOfkekKEAerHBmwthwr5XXXJ";
  const searchType =
    category === ""
      ? `trending?api_key=${apiKey}&limit=15&rating=g`
      : `search?q=${encodeURI(category)}&limit=15&api_key=${apiKey}`;

  const url = `https://api.giphy.com/v1/gifs/${searchType}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });
  return gifs;
});
