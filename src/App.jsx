import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Workflows from "./Pages/Workflows";
import Payments from "./Pages/Payments";
import Reports from "./Pages/Reports";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Workflows" element={<Workflows />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Payments" element={<Payments />} />
    </Routes>
  );
};

export default App;
