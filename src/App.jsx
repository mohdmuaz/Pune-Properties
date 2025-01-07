import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopLocations from './components/pages/TopLocations.jsx';
import ProjectTypes from './components/pages/ProjectTypes.jsx';
import Topcontent from './components/pages/topcontent.jsx';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BlogandNews from './components/pages/BlogandNews.jsx';
import PaymentGateway from "./components/pages/PaymentGateway.jsx";
import PropertyDetails from "./components/pages/PropertyDetails.jsx";

function Home() {
  return (
    <div>
      <Topcontent />
      <TopLocations />
      <ProjectTypes />
      <Features />
      <Sales />
      <Service />
      <About />
      <BlogandNews />
      <Client />
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/property-details" element={<PropertyDetails />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
