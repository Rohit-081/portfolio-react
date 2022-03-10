import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomeSection/HomePage";
import AboutPage from "./components/AboutSection/AboutPage";
import ServicePage from "./components/ServiceSection/ServicePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicePage />
    </div>
  );
}

export default App;
