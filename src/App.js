import "./App.css";
import Slider from "react-slick";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import UserProfile from "./UserProfile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
