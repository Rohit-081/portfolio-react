import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomeSection/HomePage";
import AboutPage from "./components/AboutSection/AboutPage";
import ServicePage from "./components/ServiceSection/ServicePage";
import ContactPage from "./components/ContactSection/ContactPage";
import ResumePage from "./components/ResumeSection/ResumePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicePage />
        </Route>
        <Route path="/portfolio">
          <ResumePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
