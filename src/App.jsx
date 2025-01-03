import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import './index.css'
import TopLocations from './components/pages/TopLocations.jsx'
import ProjectTypes from './components/pages/ProjectTypes.jsx';
import Topcontent from './components/pages/topcontent.jsx'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BlogandNews from './components/pages/BlogandNews.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Topcontent />
      <TopLocations/>
      <ProjectTypes/>
      <Features />
      <Sales />      
      <Service />
      <About />
      <BlogandNews />
      <Client />
      <Footer />
    </div>
  );
}

export default App;