import axios from "axios";
import { useEffect, useState } from "react";
import { formatPokeData } from "../Utils/Utils";

function useFetch(url, formatCallback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ prev: "", next: "" });

  useEffect(() => {
    geData(url);
    setData([]);
  }, [url]);

  async function geData(url) {
    setLoading(true);
    const res = await axios.get(url);
    getPokemonData(res.data.results);
    setPagination({ prev: res.data.previous, next: res.data.next });
    setLoading(false);
  }

  async function getPokemonData(data) {
    data.map(async (item) => {
      const res = await axios.get(item.url);
      setData((prevState) => [...prevState, formatCallback(res.data)]);
    });
  }

  return { data, loading, pagination };
}

export default useFetch;
