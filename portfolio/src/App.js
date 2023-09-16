import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Portfolio from './Pages/PortfolioPage/PortfolioPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Portfolio />
      <ContactPage />
    </>
  );
}

export default App;
