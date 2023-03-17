import { COLOR_MAP } from "../Utils/ColorMap";

function Stat({ stat, type = "normal" }) {
  return (
    <div className="flex py-2 justify-between space-x-10 ">
      <div className="capitalize">{stat.name}</div>
      <div className="flex space-x-5">
        <div className="w-[200px] bg-gray-200 rounded-full ">
          <div
            className=" text-sm font-bold flex items-center justify-center h-[100%] leading-none rounded-full text-slate-100"
            style={{
              width: `${stat.value > 100 ? 100 : stat.value}%`,
              backgroundColor: COLOR_MAP.get(type),
            }}
          >
            {stat.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
