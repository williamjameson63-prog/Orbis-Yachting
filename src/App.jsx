import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Fleet from "./pages/Fleet.jsx";
import YachtDetail from "./pages/YachtDetail.jsx";
import Journal from "./pages/Journal.jsx";
import JournalDetail from "./pages/JournalDetail.jsx";
import Destinations from "./pages/Destinations.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yachts" element={<Fleet />} />
      <Route path="/yachts/:slug" element={<YachtDetail />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/:slug" element={<JournalDetail />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
