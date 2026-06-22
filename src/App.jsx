import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Songs from "./pages/Songs";
import BibleReading from "./pages/BibleReading";
import BibleStudy from "./pages/BibleStudy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/reading" element={<BibleReading />} />
        <Route path="/study" element={<BibleStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;