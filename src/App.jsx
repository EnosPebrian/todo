import "./App.css";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import account from "./components/Account";
import { useEffect, useState } from "react";
import Register from "./pages/Register";

function App() {
  //set initial value
  const Array = account;

  const [userArray, setUserArray] = useState(Array);

  useEffect(() => {
    for (let item of userArray) {
      localStorage.setItem(item.email, JSON.stringify(item));
    }
  }, [userArray]);

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<Login users={[...userArray]} setUser={setUserArray} />}
        />
        <Route
          path="login"
          element={<Login users={[...userArray]} setUser={setUserArray} />}
        />
        <Route
          path="register"
          element={<Register users={[...userArray]} setUser={setUserArray} />}
        />
        <Route
          path="dashboard/:username"
          element={<Dashboard users={[...userArray]} setUser={setUserArray} />}
        />
      </Routes>
    </>
  );
}

export default App;
