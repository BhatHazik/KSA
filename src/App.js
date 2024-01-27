import {BrowserRouter, Route, Router} from "react-router-dom"
import Navbar from "./Components/Navbar";
import "../src/styles/App.css"
function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>


    </BrowserRouter>
    </>
  );
}

export default App;
