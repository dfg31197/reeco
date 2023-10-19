import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components";
import { Orders } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Orders />
    </div>
  );
}

export default App;
