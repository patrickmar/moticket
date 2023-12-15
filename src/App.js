import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './constants/Footer';
import Navbar from './constants/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Card1 from './components/Card1';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />
        <Route path="/details" element={<Card1 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
