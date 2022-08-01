import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/HomePage/Home";
import Footer from "./Components/Pages/Footer/Footer";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Pages/Services/Services";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
