import React, { useState, useRef, useEffect } from "react";
import Player from "../components/Player";
import TrackList from "../components/TrackList";

const tracks = [
  { title: "Track 1", src: require("../tracks/Chitti.mp3") },
  { title: "Track 2", src: require("../tracks/Chitti.mp3") },
  // Add more tracks as needed
];

function Home() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl mt-4">
        <Player
          currentTrack={tracks[currentTrackIndex]}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          audioRef={audioRef}
        />
        <TrackList tracks={tracks} setCurrentTrackIndex={setCurrentTrackIndex} />
      </div>
    </div>
  );
}

export default Home;