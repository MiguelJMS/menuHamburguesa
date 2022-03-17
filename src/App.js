import "./libreraries/hamburguer.css";
import Hamburger from "./libreraries/Hamburger";

function App() {
  return (
    <div id="App">
      <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} right />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}

export default App;
