import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    let isAsync = true;
    setState((state) => ({ data: state.data, loading: true }));

    const Fetch = async () => {
      try {
        if (isAsync) {
          let _object = await fetch(url);
          let result = await _object.json();
          setState({ data: result, loading: false });
        }
      } catch (error) {
        if (error) console.log(error);
      }
    };
	Fetch();
    return () => (isAsync = false);
  }, [url, setState]);

  return state;
};
