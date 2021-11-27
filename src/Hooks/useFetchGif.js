import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (gifCategory) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getGifs(gifCategory).then((imgs) => {
      setState({
        data: imgs,
        loading: false
      });
    });
  }, [gifCategory]);

  return state;
};
