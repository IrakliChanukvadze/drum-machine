import { useState, useEffect } from "react";
import "./App.css";
import Drum from "./components/Drum";
import PlayControls from "./components/PlayControls";

function App() {
  const [text, setText] = useState("");
  const [music, setMusic] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  return (
    <div className="App">
      <h1 className="app-title">Let's play the drums</h1>
      <Drum text={text} setMusic={setMusic} setText={setText} />
      <PlayControls
        music={music}
        allSongs={allSongs}
        setAllSongs={setAllSongs}
        setMusic={setMusic}
      />
    </div>
  );
}

export default App;
