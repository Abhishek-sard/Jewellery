import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components for each layout
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Home page components
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Cart from "./Components/cart/Cart";
import TwoColumnLayout from "./Components/TwoColumnLayout/TwoColumnLayout";
import ImageRow from "./Components/ImageRow/ImageRow";
import TwoRowLayer from "./Components/TwoRowLayer/TwoRowLayer";
import ImageHand from "./Components/ImageHand/ImageHand";
import ImageThree from "./Components/ImageThree/ImageThree";
import MiddleLineLayout from "./Components/MiddleLineLayout/MiddleLineLayout";

// About page components
import Imageabout from "./Components/About/ImageAbout/Imageabout";
import ImagePart from "./Components/About/ImagePart/ImagePart";
import ImageWithText from "./Components/About/ImageWithText/ImageWithText";
import Image3 from "./Components/About/Image3/Image3";
import LayerImage from "./Components/About/4LayerImage/LayerImage";
import UniqueMiddleLineLayout from "./Components/About/UniqueMiddleLineLayout/UniqueMiddleLineLayout";
import AboutFooter from "./Components/About/AboutFooter/AboutFooter";

// Schedule page components
import ScheduleBody from "./Components/Schedule/ScheduleBody/ScheduleBody";
import ImageAdd from "./Components/Schedule/ImageAdd/ImageAdd";
import ScheduleFooter from "./Components/Schedule/ScheduleFooter/ScheduleFooter";

// User page components
import LoginUser from "./Components/User/LoginUser/LoginUser";
import FooterPart from "./Components/User/FooterPart/FooterPart";
import UserBody from "./Components/User/UserBody/UserBody";

// Footer API components
import TermCondition from "./Components/FooterAPI/TermCondition/TermCondition";
import PrivacyPolicy from "./Components/FooterAPI/PrivacyPolicy/PrivacyPolicy";
import FAQ from "./Components/FooterAPI/FAQ/FAQ";
import ContactUs from "./Components/FooterAPI/ContactUs/ContactUs";
import Products from "./Components/API/Products/Products";
import ProductCategory from "./Components/API/Products/ProductCategory";
import Dashboard from "./Components/Dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Admin from "./Components/Admin/Admin";

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
      <ImageAdd />
      <ScheduleFooter />
    </>
  );
}

// User components
function User() {
  return (
    <>
      <LoginUser />
      <UserBody />
      <FooterPart />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/user" element={<User />} />
        <Route path="/terms-and-conditions" element={<TermCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Products routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductCategory />} />
        {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
