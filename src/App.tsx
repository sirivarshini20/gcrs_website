import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./components/AboutUs";
import People from "./components/People";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Ourjourney from "./components/Ourjourney";
import Commitments from "./components/Commitments";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Clients from "./components/Clients";
import Products from "./components/Products";
import RandDintiatives from "./components/RandDinitiatives";
import News from "./components/News";
import GoToTop from "./components/GoToTop";
import ScrollTopButton from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import InvestorsPartners from "./components/InvestorsPartners";
import NotFoundPage from "./components/NotFoundPage";
import OurPrivacyPolicy from "./components/OurPrivacyPolicy";
import { PuffLoader } from "react-spinners"; 
import A4Template from "./components/template";
import A4TemplateLamas from "./components/lamas-template";

function App() {
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000);  
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
     
      <div style={{ overflowX: 'hidden' }}>
        {loading ? (
         
          <div className="loading-spinner">
            <PuffLoader size={60} color={"#bd0324"} loading={loading} />
          </div>
        ) : (
          
          <>
            <Header />
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/people" element={<People />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/ourJourney" element={<Ourjourney />} />
              <Route path="/commitments" element={<Commitments />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/randDintiatives" element={<RandDintiatives />} />
              <Route path="/news" element={<News />} />
              <Route path="/investorsPartners" element={<InvestorsPartners />} />
              <Route path="/ourPrivacyPolicy" element={<OurPrivacyPolicy />} />
              <Route path="/waterstewardship" element={<A4Template />} />
              <Route path="/lamas" element={<A4TemplateLamas />} />
            </Routes>
            <Footer />
            <CookieBanner />
          </>
        )}
      </div>
      <ScrollTopButton onClick={scrollToTop} />
    </Router>
  );
}

export default App;
