import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainStore from "./components/MainStore";
import LikedItems from "./components/LikedItems";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainStore />} />
          <Route path="/likes" element={<LikedItems />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
