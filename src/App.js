import { Folder } from "./components/Folder.jsx";
import { mockData } from "./Mock.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Folder currentIteration={0} folderTree={mockData} />
    </div>
  );
}

export default App;
