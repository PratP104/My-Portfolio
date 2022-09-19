import "./App.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
