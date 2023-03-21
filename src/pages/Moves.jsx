import axios from "axios";
import { useEffect, useState } from "react";
import DetailsCard from "../components/DetailsCard";
import List from "../components/List";
import PaginationProvider from "../context/pagination-context";
import SelectedProvider from "../context/selected-context";
import useFetch from "../hooks/useFetch";
import { formatMoveData, formatPokeData } from "../Utils/Utils";

function Moves() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/move");
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);
  const { data, loading, pagination } = useFetch(url, formatMoveData);

  useEffect(() => {
    if (selected) {
      getPokemonData(selected.learned_by_pokemon);
      setPokemons([]);
    }
  }, [selected]);

  async function getPokemonData(data) {
    data.map(async (item) => {
      const res = await axios.get(item.url);
      setPokemons((prevState) => [...prevState, formatPokeData(res.data)]);
    });
  }

  return (
    <section className="grid grid-cols-[2fr_1fr] w-full">
      <PaginationProvider value={{ pagination, setUrl }}>
        <SelectedProvider value={setSelected}>
          <List loading={loading} pokemons={data} />

          <div className="px-10 justify-center shadow-xl max-h-screen">
            <DetailsCard selected={selected} />
            {selected && <p className="p-5">{selected.effect}</p>}
            <List loading={loading} pokemons={pokemons} isPaginable={false} />
          </div>
        </SelectedProvider>
      </PaginationProvider>
    </section>
  );
}

export default Moves;
