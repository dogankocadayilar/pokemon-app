import { COLOR_MAP } from "../Utils/ColorMap";

function Type({ type }) {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-5 h-5 flex justify-center rounded-full"
        style={{ backgroundColor: COLOR_MAP.get(type) }}
      >
        <img
          className="w-3 rounded-full"
          style={{ backgroundColor: COLOR_MAP.get(type) }}
          src={`./src/assets/icons/${type}.svg`}
          alt="Type Icon"
        />
      </div>
      <h4 className="capitalize text-sm text-slate-400 font-bold">{type}</h4>
    </div>
  );
}

export default Type;
