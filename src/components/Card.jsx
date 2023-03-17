import { useContext } from "react";
import { SelectedContext } from "../pages/Home";
import { COLOR_MAP } from "../Utils/ColorMap";
import Type from "./Type";

function Card({ pokemon }) {
  const setSelected = useContext(SelectedContext);

  return (
    <div
      onClick={() => setSelected(pokemon)}
      className="flex items-center p-5 bg-white w-[300px] h-20 overflow-hidden rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform"
    >
      <div>
        <h2
          className="text-2xl capitalize font-bold mb-1"
          style={{ color: COLOR_MAP.get(pokemon.type) }}
        >
          {pokemon.name}
        </h2>
        <Type type={pokemon.type} />
      </div>
      <img
        src={pokemon.image}
        alt="Pokemon Image"
        className="w-[75px] ml-auto"
      />
    </div>
  );
}

export default Card;
