import Signup from "./components/Signup/signup.js";
import Login from "./components/Login/Login";
import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [style, setStyle] = useState({
    width: () => {
      return window.innerWidth;
    },
    height: "100%",
  });
  useEffect(() => {
    window.addEventListener(
      "resize",
      setStyle({
        width: () => {
          return window.innerWidth;
        },
        height: "100%",
      })
    );
  }, []);
  return (
    <div style={style}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
