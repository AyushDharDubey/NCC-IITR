// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
// import AboutUs from "./components/AboutUs/AboutUs.js";
import AnnualReport from "./components/AnnualReport/AnnualReport.js";
import FAQs from "./components/FAQs/FAQs.js";
import Events from "./components/Events/Events.js";
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          {/* <Route exact={true} path='/about-us' element={<AboutUs />} /> */}
          <Route exact={true} path='/annual-report' element={<AnnualReport />} />
          <Route exact={true} path='/faqs' element={<FAQs />} />
          <Route exact={true} path='/events' element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;