import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import BrowserRouter and Routes
import Navbar from './Components/Navbar/Navbar';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Cart from './Components/cart/Cart';
import TwoColumnLayout from './Components/TwoColumnLayout/TwoColumnLayout';
import ImageRow from './Components/ImageRow/ImageRow';
import TwoRowLayer from './Components/TwoRowLayer/TwoRowLayer';
import ImageHand from './Components/ImageHand/ImageHand';
import ImageThree from './Components/ImageThree/ImageThree';
import MiddleLineLayout from './Components/MiddleLineLayout/MiddleLineLayout';
import Footer from './Components/Footer/Footer';
import Imageabout from './Components/About/ImageAbout/Imageabout';

function App() {
  return (
    <Router>  {/* Wrap app with BrowserRouter */}
      <Navbar />
      <Routes>  {/* Define your routes */}
        <Route path="/" element={<ImageSlider />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/two-column" element={<TwoColumnLayout />} />
        <Route path="/image-row" element={<ImageRow />} />
        <Route path="/two-row" element={<TwoRowLayer />} />
        <Route path="/image-hand" element={<ImageHand />} />
        <Route path="/image-three" element={<ImageThree />} />
        <Route path="/middle-line" element={<MiddleLineLayout />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<Imageabout />} /> {/* Route for Imageabout */}
      </Routes>
    </Router>
  );
}

export default App;
