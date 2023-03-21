import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Moves from "./pages/Moves";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  return (
    <main className="h-[100vh] flex overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types" element={<Items />} />
        <Route path="/abilities" element={<Moves />} />
      </Routes>
    </main>
  );
}

export default App;
