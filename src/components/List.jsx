import Card from "./Card";
import Pagination from "./Pagination";

function List({ loading, pokemons }) {
  return (
    <div className="flex flex-wrap gap-5 py-10 justify-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
          <Pagination />
        </>
      )}
    </div>
  );
}

export default List;
