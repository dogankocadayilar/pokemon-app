import { useState } from "react";
import PaginationProvider from "../context/pagination-context";
import SelectedProvider from "../context/selected-context";
import DetailsCard from "../components/DetailsCard";
import List from "../components/List";
import useFetch from "../hooks/useFetch";
import { formatItemData } from "../Utils/Utils";

function Items() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/item");

  const [selected, setSelected] = useState(null);
  const { data, loading, pagination } = useFetch(url, formatItemData);

  return (
    <section className="grid grid-cols-[2fr_1fr] w-full">
      <PaginationProvider value={{ pagination, setUrl }}>
        <SelectedProvider value={setSelected}>
          <List loading={loading} pokemons={data} />
          <div className="px-10 justify-center shadow-xl max-h-screen">
            <DetailsCard selected={selected} />
            {selected && <p className="p-5">{selected.effect}</p>}
          </div>
        </SelectedProvider>
      </PaginationProvider>
    </section>
  );
}

export default Items;
