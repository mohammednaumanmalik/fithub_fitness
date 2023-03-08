import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fetchdata from "./Components/Fetchdata";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Offer />
      <About />
      <Contact />
      <Fetchdata />
    </div>
  );
}

export default App;
