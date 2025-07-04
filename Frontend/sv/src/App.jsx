import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
      </div>

      <div className="footer">
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default App
  