import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Head from "../components/Head";
import Time from "../components/Time";

function Dashboard({ users, setUser }) {
  const { username } = useParams();
  return (
    <section className="dashboard container">
      <Head username={username} />
      <Time />
      <Body users={[...users]} setUser={setUser} />
    </section>
  );
}

export default Dashboard;
