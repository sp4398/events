import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <nav className="p-4 shadow-md flex justify-between items-center bg-blue-500 text-white">
        <div className="text-xl font-bold">CommunionHub</div>
        <div>
          <Link className="mx-2 font-bold" to="/">Home</Link>
          <Link className="mx-2 font-bold" to="/events">Events</Link>
          <Link className="mx-2 font-bold" to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;