import React from "react";

function TrackList({ tracks, setCurrentTrackIndex }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl mb-4 text-white">Track List</h3>
      <ul>
        {tracks.map((track, index) => (
          <li
            key={index}
            className="py-2 cursor-pointer hover:bg-gray-700 rounded-md px-2 text-white"
            onClick={() => setCurrentTrackIndex(index)}
          >
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;