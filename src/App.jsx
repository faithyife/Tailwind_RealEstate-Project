import { BrowserRouter as Router } from "react-router-dom";
import Navbartwo from "./Components/Navbartwo";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Company from "./Components/Company";
import Section_www from "./Components/Section_www";
import Check from "./Components/Check";
import OurService from "./Components/OurService";
import ListedProps from "./Components/ListedProps";
import Teams from "./Components/Teams";
import BlogPost from "./Components/BlogPost";
import Footer from "./Components/Footer"; // Removed duplicate import
import Section from "./Components/Section";
import Banner from "./Components/Banner";
// Removed duplicate import
// import { Footer, Navbar } from "flowbite-react"; 

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Navbartwo />
        <Hero />
        <Company />
        <Section_www />
        <Check />
        <OurService />
        <ListedProps />
        <Footer />
        <Teams />
        <Blog />
        <Section />
        <Banner/>
        <Footer /> 
      </>
    </Router>
  );
};

export default App;

