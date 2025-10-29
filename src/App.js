import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import Services from "./pages/services/Services"; // main service router
import DefenceAgainstMedicalNegligence from "./pages/services/DefenceOfNegligence";
import DueDiligenceAndValuation from "./pages/services/DueDiligenceAndValuation";
import LaborLawCompliance from "./pages/services/LaborLawCompliance";
import HealthcareFacilities from "./pages/services/HealthcareFacilities";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/defence-of-medical-negligence-claims" element={<DefenceAgainstMedicalNegligence />} /> 
        <Route path="/services/labor-law-compliance" element={<LaborLawCompliance />} /> 
        <Route path="/services/due-diligence-and-valuation" element={<DueDiligenceAndValuation />} /> 
        <Route path="/services/healthcare-facilities" element={<HealthcareFacilities/>}/>
      </Routes>
    </Router>
  );
}

export default App;
