import {BrowserRouter, Route, Router} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import "../src/styles/App.css"
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Section/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
