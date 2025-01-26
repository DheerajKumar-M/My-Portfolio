import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Container/Home";
import About from "./Container/about";
import Resume from "./Container/resume";
import Skills from "./Container/skills";
import Portfolio from "./Container/portfolio";
import Contact from "./Container/contact";
import Navbar from "./Components/navBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils.js/particles";
function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJSInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJSInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/*navbar */}
      <Navbar />
      {/*main page content */}

      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
