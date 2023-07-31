import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import "./components/style.css";
import Head from "./components/Head";
import Time from "./components/Time";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const Account = [
    { name: "User1", password: "pass", email: "user1@mail.com" },
  ];

  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
