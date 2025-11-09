import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import AboutTeam from "./pages/AboutTeam";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Services";
import FilmProduction from "./pages/FilmProduction";
import Branding from "./pages/Branding";
import ArtCuration from "./pages/ArtCuration";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutTeam/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/filmProd" element={<FilmProduction/>} />
          <Route path="/branding" element={<Branding/>} />
          <Route path="/art" element={<ArtCuration/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
