import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import ContactUs from "./components/ContactUs";
import Support from "./components/Support";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
