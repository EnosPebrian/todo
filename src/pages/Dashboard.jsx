import { useNavigate, useParams } from "react-router-dom";
import Body from "../components/Body";
import Head from "../components/Head";
import Time from "../components/Time";

function Dashboard({ users, setUser, todo, setTodo, login }) {
  const nav = useNavigate();
  if (!login) nav("/login");
  const { name } = useParams();
  return (
    <section className="dashboard container">
      <Head login={login} name={name} />
      <Time />
      <Body
        users={[...users]}
        setUser={setUser}
        login={login}
        todo={[...todo]}
        setTodo={setTodo}
      />
    </section>
  );
}

export default Dashboard;
