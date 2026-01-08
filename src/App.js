import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import Services from "./pages/services/Services"; // main service router
import DefenceAgainstMedicalNegligence from "./components/services/DefenceOfNegligence";
import DueDiligenceAndValuation from "./components/services/DueDiligenceAndValuation";
import LaborLawCompliance from "./components/services/LaborLawCompliance";
import HealthcareFacilities from "./components/services/HealthcareFacilities";
import Footer from "./components/footer";
import ServicesSection from "./pages/Services";
import IntellectualPropertyPage from "./components/services/IntellectualPropertyProtection";
import ComplianceManagementPage from "./components/services/ComplianceManagement";
import LicensesRenewalsPage from "./components/services/LicensesAndRenewals";
import AccountingServicesPage from "./components/services/AccountingServices";
import ChatBot from "./components/bot/bot";
import ScrollToTop from "./components/scrollToTop";
import HealthcareStartupAdvisoryPage from "./components/services/HealthcareStartupAdvisoryPage";
import ContactForm from "./components/home/Contact";
import BlogPost from "./components/blogs/BlogPost";
import BlogSection from "./components/blogs/BlogSection";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<ServicesSection/>}/>
            <Route path="/services/defence-of-medical-negligence-claims" element={<DefenceAgainstMedicalNegligence />} /> 
            <Route path="/services/labor-law-compliance" element={<LaborLawCompliance />} /> 
            <Route path="/services/due-diligence-and-valuation" element={<DueDiligenceAndValuation />} /> 
            <Route path="/services/design-and-construction-of-healthcare-facilities" element={<HealthcareFacilities/>}/>
            <Route path="/services/intellectual-property-protection" element={<IntellectualPropertyPage/>} />
            <Route path="/services/compliance-management" element={<ComplianceManagementPage/>} />
            <Route path="/services/licenses-and-renewals" element={<LicensesRenewalsPage/>} />
            <Route path="/services/healthcare-startup-advisory" element={<HealthcareStartupAdvisoryPage/>}/>
            <Route path="/services/accounting-services" element={<AccountingServicesPage/>}/>
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        <ChatBot/>
      <Footer/>
    </Router>
  );
}

export default App;
