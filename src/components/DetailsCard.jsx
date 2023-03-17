import { COLOR_MAP } from "../Utils/ColorMap";
import Stat from "./Stat";
import Type from "./Type";

function DetailsCard({ selected }) {
  return (
    <>
      {selected && (
        <div
          className="space-y-5 h-[700px] min-w-[420px] shadow-xl rounded-md bg-white p-5 mt-[100px] "
          style={{
            boxShadow: `0 0 20px  ${COLOR_MAP.get(selected.type)}`,
          }}
        >
          <div className="flex items-center justify-center">
            <img
              src={selected.image}
              alt="Pokemon Image"
              className="w-[300px] h-[300px] "
            />
          </div>
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
