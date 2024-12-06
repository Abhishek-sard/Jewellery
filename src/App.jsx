import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Cart from "./Components/cart/Cart";
import TwoColumnLayout from "./Components/TwoColumnLayout/TwoColumnLayout";
import ImageRow from "./Components/ImageRow/ImageRow";
import TwoRowLayer from "./Components/TwoRowLayer/TwoRowLayer";
import ImageHand from "./Components/ImageHand/ImageHand";
import ImageThree from "./Components/ImageThree/ImageThree";
import MiddleLineLayout from "./Components/MiddleLineLayout/MiddleLineLayout";
import Footer from "./Components/Footer/Footer";
import Imageabout from "./Components/About/ImageAbout/Imageabout";
import ImagePart from "./Components/About/ImagePart/ImagePart";
import ImageWithText from "./Components/About/ImageWithText/ImageWithText";
import Image3 from "./Components/About/Image3/Image3";
import LayerImage from "./Components/About/4LayerImage/LayerImage";
import UniqueMiddleLineLayout from "./Components/About/UniqueMiddleLineLayout/UniqueMiddleLineLayout";
import AboutFooter from "./Components/About/AboutFooter/AboutFooter";
import ScheduleBody from "./Components/Schedule/ScheduleBody/ScheduleBody";

// Home layout component
function Home() {
  return (
    <>
      <ImageSlider />
      <Cart />
      <TwoColumnLayout />
      <ImageRow />
      <TwoRowLayer />
      <ImageHand />
      <ImageThree />
      <MiddleLineLayout />
      <Footer />
    </>
  );
}

// About layout component
function About() {
  return (
    <>
      <Imageabout />
      <ImagePart />
      <ImageWithText />
      <Image3 />
      <LayerImage />
      <UniqueMiddleLineLayout />
      <AboutFooter />
    </>
  );
}

// Schedule components
function Schedule() {
  return (
    <>
      <ScheduleBody />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/schedule" element={<Schedule />} /> {/* Schedule route */}
      </Routes>
    </Router>
  );
}

export default App;
