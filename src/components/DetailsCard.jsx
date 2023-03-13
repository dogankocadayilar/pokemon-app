import { useContext } from "react";
import { selectedContext } from "../App";
import { COLOR_MAP } from "../Utils/ColorMap";
import Stat from "./Stat";
import Type from "./Type";

function DetailsCard() {
  const { selected } = useContext(selectedContext);

  return (
    <section className="flex items-center justify-center ">
      {selected && (
        <div className="space-y-5 shadow-lg rounded-md bg-white p-5">
          <img
            src={selected.image}
            alt="Pokemon Image"
            className="w-full h-[300px]"
          />
          <div className="flex justify-between">
            <h3 className="font-bold capitalize text-xl">{selected.name}</h3>
            <Type type={selected.type} />
          </div>
          <div className="">
            {selected &&
              selected.stats.map((stat) => (
                <Stat stat={stat} type={selected.type} />
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default DetailsCard;
