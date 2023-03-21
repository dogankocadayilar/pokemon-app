import { Link } from "react-router-dom";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="w-[75px] lg:min-w-[300px] bg-white h-[100vh] shadow-xl p-3 flex flex-col transition">
      <div className="p-3 py-6 flex items-center space-x-5 justify-center lg:justify-start">
        <UserGroupIcon className="w-8" />
        <h1 className="font-bold text-2xl hidden lg:block">Pokemonal</h1>
      </div>

      <Link
        to="/"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-5 justify-center lg:justify-start"
      >
        <HomeIcon className="w-8" />
        <span className="text-lg font-bold hidden lg:block">Home</span>
      </Link>

      <Link
        to="/types"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-5 justify-center lg:justify-start"
      >
        <SparklesIcon className="w-8" />
        <span className="text-lg font-bold hidden lg:block">Items</span>
      </Link>

      <Link
        to="/abilities"
        className="w-full p-3 hover:bg-slate-100 flex items-center space-x-5 justify-center lg:justify-start"
      >
        <RocketLaunchIcon className="w-8" />
        <span className="text-lg font-bold hidden lg:block">Moves</span>
      </Link>
    </div>
  );
}

export default Sidebar;
