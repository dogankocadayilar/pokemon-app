import { Link } from "react-router-dom";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="w-[300px] bg-white shadow-xl p-3 flex flex-col">
      <h1 className="font-bold text-2xl p-3">Pokemon App</h1>

      <Link
        to="/"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-2"
      >
        <HomeIcon className="w-6" />
        <span className="text-lg font-bold">Home</span>
      </Link>

      <Link
        to="/types"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-2"
      >
        <SparklesIcon className="w-6" />
        <span className="text-lg font-bold">Types</span>
      </Link>

      <Link
        to="/abilities"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-2"
      >
        <RocketLaunchIcon className="w-6" />
        <span className="text-lg font-bold">Abilities</span>
      </Link>
    </div>
  );
}

export default Sidebar;
