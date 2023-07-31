import "./App.css";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import account from "./components/Account";
import { useEffect } from "react";
import Register from "./pages/Register";

function App() {
  useEffect(() => {
    const test = localStorage.getItem("username1@mail.com");
  }, []);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard/:username" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
