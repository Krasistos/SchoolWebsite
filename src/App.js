import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Library from "./pages/Library";
import Rewards from "./pages/Rewards";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/library" element={<Library />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
