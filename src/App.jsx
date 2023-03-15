import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCard from "./components/DetailsCard";
import List from "./components/List";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";

function formatJson(data) {
  return {
    experience: data.base_experience,
    height: data.height,
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    type: data.types[0].type.name,
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name.replace("-", " "),
        value: stat.base_stat,
      };
    }),
  };
}

export const pokemonContext = createContext(null);
export const selectedContext = createContext(null);

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [pagination, setPagination] = useState({ prev: "", next: "" });

  useEffect(() => {
    geData(url);
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
    <>
      <pokemonContext.Provider
        value={{ pokemons, setPokemons, pagination, setUrl }}
      >
        <selectedContext.Provider value={{ selected, setSelected }}>
          <main className="bg-slate-100 grid grid-cols-[300px_2fr_1fr] min-h-screen ">
            <Sidebar />
            {/* list of pokemons */}
            <List loading={loading} />

            {/* pokemon card with info */}
            <DetailsCard />
          </main>
        </selectedContext.Provider>
      </pokemonContext.Provider>
      <Routes>
        <Route path="/" />
        <Route path="/types" />
        <Route path="/abilities" />
      </Routes>
    </>
  );
}

export default App;
