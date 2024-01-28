import {BrowserRouter, Route, Router} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import "../src/styles/App.css"
function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Section/>

    </BrowserRouter>
    </>
  );
}

export default App;
