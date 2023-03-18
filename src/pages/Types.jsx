import { useEffect, useState } from "react";

function Types() {
  const [types, setTypes] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/type/");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [pagination, setPagination] = useState({ prev: "", next: "" });

  useEffect(() => {
    geData(url);
    setPokemons([]);
  }, [url]);

  async function geData(url) {
    setLoading(true);
    const res = await axios.get(url);
    getPokemonData(res.data.results);
    setPagination({ prev: res.data.previous, next: res.data.next });
    setLoading(false);
  }

  return <div>Types</div>;
}

export default Types;
