import { Folder } from "./components/foldder/Folder.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Folder currentIteration={0} title='folder'/>
    </div>
  );
}

export default App;
