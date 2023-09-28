import "./App.scss";
import Navbar from "./Pages/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Portfolio from "./Pages/PortfolioPage/PortfolioPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </>
  );
}

export default App;
