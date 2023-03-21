import { useContext } from "react";
import { SelectedContext } from "../context/selected-context";
import { COLOR_MAP } from "../Utils/ColorMap";
import Type from "./Type";

function Card({ data }) {
  const setSelected = useContext(SelectedContext);

  return (
    <div
      onClick={() => setSelected(data)}
      className="flex items-center p-5 bg-white w-[300px] h-20 overflow-hidden rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform"
    >
      <div>
        <h2
          className="text-2xl capitalize font-bold mb-1"
          style={{ color: COLOR_MAP.get(data.type) }}
        >
          {data.name}
        </h2>
        {data.type && <Type type={data.type} />}
      </div>
      {data.hasOwnProperty("image") && (
        <img
          src={data.image}
          alt="Pokemon Image"
          className="w-[75px] ml-auto"
        />
      )}
    </div>
  );
}

export default Card;
