import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomeSection/HomePage";
import AboutPage from "./components/AboutSection/AboutPage";
import ServicePage from "./components/ServiceSection/ServicePage";
import ContactPage from "./components/ContactSection/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicePage />
      <ContactPage />
    </div>
  );
}

export default App;
