import { useContext, useState } from "react";
import { pokemonContext } from "../App";

function Pagination() {
  const [count, setCount] = useState(1);
  const { pagination, setUrl, setPokemons } = useContext(pokemonContext);

  function handleClick(url, x) {
    setUrl(url);
    setPokemons([]);
    setCount((prevState) => prevState + x);
  }

  return (
    <div className="flex items-center w-[300px] h-20 justify-between text-xl bg-white shadow-lg">
      <button
        className="w-[100px] hover:bg-slate-100"
        disabled={pagination.prev == null}
        onClick={() => handleClick(pagination.prev, -1)}
      >
        Previous
      </button>
      <div className="">{count}</div>
      <button
        className="w-[100px] hover:bg-slate-100"
        disabled={pagination.next == null}
        onClick={() => handleClick(pagination.next, 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
