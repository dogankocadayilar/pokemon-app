import { useContext, useState } from "react";

function Pagination({ pagination, setUrl, setPokemons }) {
  const [count, setCount] = useState(1);

  function handleClick(url) {
    setUrl(url);
    setPokemons([]);
  }

  return (
    <div className="flex items-center w-[300px] h-20 justify-between text-xl border border-black bg-white">
      <button
        className="w-[100px]"
        disabled={pagination.prev == null}
        onClick={() => handleClick(pagination.prev, -1)}
      >
        Previous
      </button>
      <div className="">{count}</div>
      <button
        className="w-[100px]"
        disabled={pagination.next == null}
        onClick={() => handleClick(pagination.next, 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
