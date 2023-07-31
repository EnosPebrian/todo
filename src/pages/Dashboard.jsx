import Body from "../components/Body";
import Head from "../components/Head";
import Time from "../components/Time";

function Dashboard() {
  return (
    <section className="dashboard">
      <Head />
      <Time />
      <Body />
    </section>
  );
}

export default Dashboard;
