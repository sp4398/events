import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp2349396.jpg')",
      }}
    >
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-5">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="mb-5 text-white text-xl bg-opacity-30 p-2 rounded-lg">
          Connecting people of all faiths through events and community support.
        </p>
        <Link
          to="/events"
          className="mb-40 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Explore Events
        </Link>
    </div>
  );
}
export default Home;