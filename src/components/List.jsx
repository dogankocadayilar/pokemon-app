import Card from "./Card";
import Pagination from "./Pagination";

function List({ loading, pokemons, isPaginable = true }) {
  return (
    <div className="flex flex-wrap gap-5 py-10 justify-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} data={pokemon} />
          ))}
          {isPaginable && <Pagination />}
        </>
      )}
    </div>
  );
}

export default List;
