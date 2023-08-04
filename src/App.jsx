import "./App.css";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import { useEffect, useState } from "react";
import { Register, RegisterFormik } from "./pages/Register";
import api from "./json-server/api";

function App() {
  const [userArray, setUserArray] = useState([]);
  const [todo, setTodo] = useState([]);
  const [login, setLogin] = useState("");

  //call account
  const fetchData = async () => {
    try {
      const res_accounts = await api.get("/users");
      const res_tasks = await api.get("/todo");
      // console.log(`tasks`, res_tasks);
      setUserArray([...res_accounts.data]);
      setTodo([...res_tasks.data]);
    } catch (err) {
      // console.log(err);
    }
  };

  //fetch on first load
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(userArray);
  // console.log(todo);

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Login
              users={[...userArray]}
              setUser={setUserArray}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              users={[...userArray]}
              setUser={setUserArray}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="register"
          element={
            <Register
              users={[...userArray]}
              setUser={setUserArray}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="register2"
          element={
            <RegisterFormik
              users={[...userArray]}
              setUser={setUserArray}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="dashboard/:name"
          element={
            <Dashboard
              users={[...userArray]}
              setUser={setUserArray}
              todo={[...todo]}
              setTodo={setTodo}
              login={{ ...login }}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
