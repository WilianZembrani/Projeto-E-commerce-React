import React from 'react';
import { Router, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Router>
        <Route path="/" element={<Home />} />
        <Router path="/Collection" element={<Collection />} />
        <Router path="/about" element={<About />} />
        <Router path="/contact" element={<Contact />} />
        <Router path="/product/:productId" element={<Product />} />
        <Router path="/cart" element={<Cart />} />
        <Router path="/login" element={<Login />} />
        <Router path="/place-order" element={<PlaceOrder />} />
        <Router path="/orders" element={<Orders />} />
      </Router>
    </div>
  );
};

export default App;
