import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountriesPage from './pages/CountriesPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/countries" element={<CountriesPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
