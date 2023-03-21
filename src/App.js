import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import History from "./pages/History";
import Marsipangarden from "./pages/Marsipangarden";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}/>
        </Routes>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/garden" element={<Marsipangarden />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
