import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Abilities from "./pages/Abilities";
import Home from "./pages/Home";
import Types from "./pages/Types";

function App() {
  return (
    <main className="h-[100vh] flex overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types" element={<Types />} />
        <Route path="/abilities" element={<Abilities />} />
      </Routes>
    </main>
  );
}

export default App;
