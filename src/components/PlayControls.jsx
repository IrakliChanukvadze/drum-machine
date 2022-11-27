import React, { useEffect, useState } from "react";
import "./PlayControls.css";
import play from "../assets/play.png";
import save from "../assets/save.png";
import pause from "../assets/pause.png";
import del from "../assets/delete.png";
import { TextField } from "@mui/material";

function PlayControls({ music, allSongs, setAllSongs, setMusic }) {
  const [loop, setLoop] = useState();
  const [songName, setSongName] = useState("");
  const playSong = () => {
    let index = 0;
    setLoop(
      setInterval(() => {
        if (index === music.length) {
          clearInterval(loop);
        } else {
          music[index].play();
          index++;
        }
      }, 250)
    );
  };

  // useEffect(() => {
  //   console.log("entered");
  //   console.log(allSongs);
  //   //localStorage.setItem("songs", JSON.stringify(allSongs));
  // }, [allSongs]);

  const namingSong = () => {
    if (allSongs.some((item) => item.name === songName)) {
      alert("name already taken please choose another");
    } else if (!songName) {
      alert("please name a song");
    } else {
      setAllSongs((prev) => [
        ...prev,
        { id: songName, song: music, name: songName },
      ]);
      setMusic([]);
    }
  };

  const setCurrentSong = (value) => {
    let current;
    allSongs.forEach((element) => {
      console.log(element.name);
      console.log(value);
      if (element.name[0] === value[0]) {
        console.log("changed");
        current = element.song;
      }
    });
    console.log(current);
    setMusic(current);
  };

  return (
    <div className="controls-page-container">
      <div className="controls-container">
        <TextField
          label="choose name for song"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <img className="control-icon" src={play} onClick={playSong} />
        <img
          className="control-icon pause"
          src={pause}
          onClick={() => {
            clearInterval(loop);
          }}
        />
        <img className="control-icon" onClick={namingSong} src={save} />
        <img className="control-icon" src={del} />
      </div>
      {allSongs.length && (
        <div className="select-container">
          <h3 className="select-title">choose song:</h3>
          <select
            className="control-select"
            onChange={(e) => setCurrentSong(e.target.value)}
          >
            <option value={""}>default</option>
            {allSongs.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default PlayControls;
