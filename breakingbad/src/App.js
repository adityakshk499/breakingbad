import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Quotes from "./Components/Quotes";
import Deaths from "./Components/Deaths";
import Characters from "./Components/Characters";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
};

export default App;
