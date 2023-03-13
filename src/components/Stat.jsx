import { COLOR_MAP } from "../Utils/ColorMap";

function Stat({ stat, type = "normal" }) {
  return (
    <div className="flex py-2 justify-between space-x-10 ">
      <div className="capitalize">{stat.name}</div>
      <div className="flex space-x-5">
        <input
          type="range"
          value={stat.value}
          className="w-[150px] pointer-events-none ml-auto slider"
        />
        <div className="ml-auto">{stat.value}</div>
      </div>
    </div>
  );
}

export default Stat;
