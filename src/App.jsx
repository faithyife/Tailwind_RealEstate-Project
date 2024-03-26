import { BrowserRouter as Router } from "react-router-dom";
import Navibar from "./Components/Navibar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Company from "./Components/Company";
import Whoare from "./Components/Whoare";
import Check from "./Components/Check";
import Service from "./Components/Service";
import Properties from "./Components/Properties";
import Teams from "./Components/Teams";
import Blog from "./Components/Blog";
import Footers from "./Components/Footers";
import TestimonialSlider from "./Components/TestimonialSlider";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Navibar />
        <Hero />
        <Company />
        <Whoare />
        <Check />
        <Service />
        <Properties />
        <Teams />
        <Blog />
        <TestimonialSlider />
        <Banner/>
        <Footers />
      </>
    </Router>
  );
};

export default App;
