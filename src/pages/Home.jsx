import { useState } from "react";
import PaginationProvider from "../context/pagination-context";
import SelectedProvider from "../context/selected-context";
import DetailsCard from "../components/DetailsCard";
import List from "../components/List";
import useFetch from "../hooks/useFetch";
import { formatPokeData } from "../Utils/Utils";

function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const [selected, setSelected] = useState(null);
  const { data, loading, pagination } = useFetch(url, formatPokeData);

  return (
    <section className="grid grid-cols-[2fr_1fr] w-full">
      <PaginationProvider value={{ pagination, setUrl }}>
        <SelectedProvider value={setSelected}>
          <List loading={loading} pokemons={data} />
        </SelectedProvider>
      </PaginationProvider>
      <div className="flex px-10 justify-center shadow-xl">
        <DetailsCard selected={selected} />
      </div>
    </section>
  );
}

export default Home;
