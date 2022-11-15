import React, { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    
    {
      title: "On & On",
      artist: "Carton",
      img_src: "./images/song-2.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Waka Waka",
      artist: "Shakira",
      img_src: "./images/song-1.jpg",
      src: "./music/Waka Waka - Shakira.mp3"
    },
    {
      title: "I'm The One ft. Justin Bieber",
      artist: "DJ Khaled",
      img_src: "./images/song-3.jpg",
      src: "./music/I'm the One(Mr-Jatt1.com).mp3"
    },
    {
      title: "Despacito",
      artist: "Justin Bieber",
      img_src: "./images/song-4.jpg",
      src: "./music/Despacito - Justin Bieber.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
