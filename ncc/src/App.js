// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home/Home.js";
// import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;