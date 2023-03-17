import axios from "axios";
import { createContext, useEffect, useState } from "react";
import DetailsCard from "../components/DetailsCard";
import List from "../components/List";
import { formatJson } from "../Utils/Utils";

export const PaginationContext = createContext(null);
export const SelectedContext = createContext(null);

function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
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

  async function getPokemonData(data) {
    data.map(async (item) => {
      const res = await axios.get(item.url);
      setPokemons((prevState) => [...prevState, formatJson(res.data)]);
    });
  }

  return (
    <section className="grid grid-cols-[2fr_1fr] w-full">
      <PaginationContext.Provider value={{ pagination, setUrl }}>
        <SelectedContext.Provider value={setSelected}>
          <List loading={loading} pokemons={pokemons} />
        </SelectedContext.Provider>
      </PaginationContext.Provider>
      <div className="flex px-10 justify-center shadow-xl">
        <DetailsCard selected={selected} />
      </div>
    </section>
  );
}

export default Home;
