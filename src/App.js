import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountriesPage from './pages/CountriesPage';
import CountryInfoPage from "./pages/CountryInfoPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/countries" element={<CountriesPage/>} />
        <Route path="/countries/:id" element={<CountryInfoPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
