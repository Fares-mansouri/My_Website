import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/HomePage/Home";
import Footer from "./Components/Pages/Footer/Footer";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Portfolio />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
