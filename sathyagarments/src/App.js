import Signup from "./components/Signup/signup.js";
import Login from "./components/Login/Login";
import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Billing from "./components/billing/billing.js";
import Admin from "./components/admin/admin.js";

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
        <Route path="/billing" element={<Billing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
