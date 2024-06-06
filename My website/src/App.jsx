import Blog from "./Component/Blog/Blog";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import NavBar from "./Component/Navbar/NavBar";
import Title from "./Component/Title/Title";
import Skills from "./Component/Skills/Skills";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="About Me" />
        <About />
        <Title title="My Blog" />
        <Blog />
        <Title title="My Skills" />
        <Skills />
        <Title title="Contact Me" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
