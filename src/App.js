import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomeSection/HomePage";
import AboutPage from "./components/AboutSection/AboutPage";
import ServicePage from "./components/ServiceSection/ServicePage";
import ContactPage from "./components/ContactSection/ContactPage";
import ResumePage from "./components/ResumeSection/ResumePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicePage />
      <ResumePage />
      <ContactPage />
    </div>
  );
}

export default App;
