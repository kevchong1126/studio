import React from "react";

/* Components */
import Bg from "./components/Bg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Parallax from "./components/Parallax/Parallax";
import Magazines from "./components/Magazines/Magazines";
import Covers from "./components/Covers/Covers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Bg />
      <Navbar />
      <Hero />
      <History />
      <Parallax />
      <Magazines />
      <Covers />
      <Footer />
    </div>
  );
}

export default App;
