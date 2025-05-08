import Header from "./Component/header/Header.jsx";
import About from "./Component/about/About.jsx";
import "./App.css";
import Nav from "./Component/nav/Nav.jsx";
import Portfolio from "./Component/portfolio/Portfolio.jsx";
import Services from "./Component/services/Services.jsx";
import Testimonia from "./Component/testimonia/Testimonia.jsx";
import Footer from "./Component/footer/Footer.jsx";
import Experience from "./Component/expriences/Experience.jsx";
import Contact from "./Component/contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonia />
        <Contact />

        <Footer />
      </>
    </div>
  );
}

export default App;
