import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MiniNavbar from "./components/MiniNavbar";
import AboutUs from "./components/AboutUs";
import Executive_members from "./pages/ExecutiveMembers";
import Orators from "./pages/Orators";
import Venue from "./pages/Venue";
import About from "./pages/About";
import EpmTemplate from "./components/epms/EpmTemplate";

// import EventSchedule from "./pages/EventSchedule";
import SponsorshipPackages from "./pages/SponsorshipPackages";
import QuickLinks from "./components/ui/QuickLinks";
import ContactForm from "./pages/Contact";
import Schedule from "./pages/EventSchedule";
import RotatingLogos from "./pages/RotatingLogos";
import AbstractSubmission from "./pages/AbstractSubmission";
import BrochureDownload from "./pages/BrochureDownload";
import FAQPage from "./pages/FAQPage";
import OratorsTemplate from "./components/orators/OratorTemplate";
import ScrollToTop from "./components/ScrollToTop";
import ExecutiveMembers from "./pages/ExecutiveMembers";
// import Orators from "./components/Orators";
// import FAQ from "./components/Faq";

function App() {
  const [showMiniNavbar, setShowMiniNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowMiniNavbar(window.scrollY < 90);
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      {/* {showMiniNavbar && <MiniNavbar />} */}
      <ScrollToTop />
      <QuickLinks />
      <Navbar showMiniNavbar={showMiniNavbar} />
      {/* <ActualNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/executive-panel-members" element={<ExecutiveMembers />} />
        <Route path="/foodmeet-conference-orators" element={<Orators />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/about-world-foodmeet-conclave" element={<About />} />
        <Route path="/abstract-submission" element={<AbstractSubmission />} />
        <Route path="/brochure-download" element={<BrochureDownload />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/global-foodmeet-summit-tracks" element={<RotatingLogos />} />
        <Route path="/event-partners" element={<SponsorshipPackages />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/international-foodmeet-event-schedule" element={<Schedule />} />
        <Route path="/orator/:id" element={<OratorsTemplate />} />
        <Route path="/panel-member/:id" element={<EpmTemplate />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
