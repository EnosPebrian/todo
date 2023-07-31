import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import "./components/style.css";
import Head from "./components/Head";
import Time from "./components/Time";

function App() {
  return (
    <section>
      <Head></Head>
      <Time></Time>
      <Body></Body>
    </section>
  );
}

export default App;
