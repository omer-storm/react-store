import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainStoreHK from "./components/mainStoreHK";
import LikedItems from "./components/likedItems";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainStoreHK />} />
          <Route path="/likes" element={<LikedItems />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
