import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Fleet from "./pages/Fleet.jsx";
import YachtDetail from "./pages/YachtDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yachts" element={<Fleet />} />
      <Route path="/yachts/:slug" element={<YachtDetail />} />
    </Routes>
  );
}
