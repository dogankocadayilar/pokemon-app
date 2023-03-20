import { COLOR_MAP } from "../Utils/ColorMap";
import Stat from "./Stat";
import Type from "./Type";

function DetailsCard({ selected }) {
  return (
    <>
      {selected && (
        <div className="space-y-10 max-h-[700px] min-w-[420px] rounded-md bg-white p-5 mt-[100px] ">
          {selected.hasOwnProperty("image") && (
            <div className="flex items-center justify-center">
              <img
                src={selected.image}
                alt="Pokemon Image"
                className="w-[300px] h-[300px] "
              />
            </div>
          )}
          <div className="flex justify-between">
            <h3 className="font-bold capitalize text-xl">{selected.name}</h3>
            <Type type={selected.type} />
          </div>
          <div className="">
            {selected &&
              selected.stats.map((stat) => (
                <Stat key={stat.name} stat={stat} type={selected.type} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsCard;
