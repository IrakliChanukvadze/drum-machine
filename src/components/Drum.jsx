import React, { useEffect } from "react";
import drumData from "../drumData";
import "./Drum.css";
function Drum({ text, setText, setMusic }) {
  const play = (item) => {
    document.getElementById(`${item.key}`).play();
    setText(item.song);
    setMusic((prev) => [...prev, document.getElementById(`${item.key}`)]);
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      drumData.map((item) => {
        if (e.key.toUpperCase() === item.key) {
          play(item);
        }
      }, []);
    });
  }, []);
  const drum = drumData.map((item) => (
    <button
      id={item.song}
      key={item.key}
      className="drum-pad"
      onClick={() => {
        play(item);
      }}
    >
      {item.key}
      <audio id={item.key} src={item.url} className="clip" />
    </button>
  ));
  return (
    <div className="drum-machine">
      <div className="drum-container">{drum}</div>
      {<h2 className="drum-text">beat name: {text}</h2>}
    </div>
  );
}

export default Drum;
