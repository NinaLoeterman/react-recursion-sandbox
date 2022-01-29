import { Folder } from "./components/Folder.jsx";
import { mockData } from "./Mock.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Folder {...mockData} />
    </div>
  );
}

export default App;
