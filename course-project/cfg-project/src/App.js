import './App.css';
import './components/bootstrap/css/bootstrap.min.css';
import './components/css/style.css';
import './components/css/animate.min.css';
import './components/css/font-awesome.min.css';
import './components/owl-carrosel/owl.theme.default.min.css';
import './components/css/offcanvas-menu.css';
import './components/css/responsive.css';
import './components/css/accordion.css';


import { Route, Routes } from "react-router-dom"
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Homepage from "./components/Homepage";
import Aboutus from "./components/About";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Gallery from "./components/Gallery";
import FAQ from "./components/Faq";
import Pricing from "./components/Pricing";
import ContactUs from "./components/Contactus";
import OffCanvasView from './components/OffCanvasView';


function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      <MainFooter/>
      <OffCanvasView/>
    </div>
  );
}

export default App;
