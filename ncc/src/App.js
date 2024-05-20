// import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Home from "../src/components/Home/home.js";
import Navbar from "../src/components/Navbar/navbar.js";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
              <Route exact={true} path='/' element={<Home />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
    </div>
  );
}

export default App;