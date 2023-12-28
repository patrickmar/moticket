import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './constants/Footer';
import Navbar from './constants/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Card1 from './components/Card1';
import EventDetails from './pages/EventDetails';
import Cart from './pages/Cart';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<Card1 />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
