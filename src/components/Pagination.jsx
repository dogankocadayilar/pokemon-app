import { useContext, useState } from "react";
import { PaginationContext } from "../pages/Home";

function Pagination() {
  const [count, setCount] = useState(1);
  const { pagination, setUrl } = useContext(PaginationContext);

  function handleClick(url, x) {
    setUrl(url);
    setCount((prevState) => prevState + x);
  }

  return (
    <div className="flex items-center w-[300px] h-20 justify-between text-xl bg-white shadow-lg">
      <button
        className="w-[100px] h-full hover:bg-slate-100 cursor-pointer"
        disabled={pagination?.prev == null}
        onClick={() => handleClick(pagination.prev, -1)}
      >
        Prev
      </button>
      <div className="">{count}</div>
      <button
        className="w-[100px] h-full hover:bg-slate-100 cursor-pointer"
        disabled={pagination?.next == null}
        onClick={() => handleClick(pagination.next, 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
