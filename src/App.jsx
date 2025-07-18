
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/HeaderOne";
import HeaderThree from "./Components/Header/HeaderThree";
import HeaderTwo from "./Components/Header/HeaderTwo";
import ProductSection from "./Components/Content/ProductSection";
import { CartProvider } from "./Components/Content/CartContext";



import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog";

function App() {
  return (
    <Router> 
      <CartProvider>
       
        <Header />
        <HeaderTwo />
        <HeaderThree />
        
    
        <Routes>
          <Route path="/" element={<ProductSection />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
    
    
  );
}

export default App;
