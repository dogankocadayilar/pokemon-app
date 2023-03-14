import { useContext } from "react";
import { pokemonContext } from "../App";
import Card from "./Card";
import Pagination from "./Pagination";

function List({ loading }) {
  const { pokemons } = useContext(pokemonContext);
  return (
    <section className="flex flex-wrap gap-10 p-5 justify-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
      )}
      <Pagination />
    </section>
  );
}

export default List;
