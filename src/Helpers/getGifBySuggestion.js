export const getGifBySuggestion = async (inputValue, setValueFunction) => {
    const key = "gXsfPNJlsOfkekKEAerHBmwthwr5XXXJ";
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${inputValue}&limit=5&offset=0&rating=g&lang=en`
    );
    const { data } = await request.json();
    setValueFunction(data);
  };
  