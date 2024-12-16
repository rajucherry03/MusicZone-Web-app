import React from "react";

function Player({ currentTrack, isPlaying, onPlayPause, onNext, onPrevious, audioRef }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl mb-4 text-white">{currentTrack.title}</h2>
      <audio ref={audioRef} onEnded={onNext}>
        <source src={currentTrack.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex justify-between items-center mt-4">
        <button onClick={onPrevious} className="text-2xl text-white">⏮️</button>
        <button onClick={onPlayPause} className="text-2xl text-white">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button onClick={onNext} className="text-2xl text-white">⏭️</button>
      </div>
    </div>
  );
}

export default Player;