import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainStore from "./pages/MainStore";
import LikedItems from "./pages/LikedItems";
import Login from "./pages/Login";
import Register from "./pages/Register"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainStore />} />
          <Route path="/likes" element={<LikedItems />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
