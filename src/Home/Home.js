import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import TopNavbar from "./TopBar/Topbar";
import Features from "./Features/Features";
import Product from "./Products/Products";
import AllSections from "./AllSections/AllSections";
import Cards from "./CardOfferSection/Cards";
import Vendor from "./vendorSection/Vendor";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Features />
      <Product />
      <Cards />
      <AllSections />
      <Vendor />
      <Footer />
      <a href="/#" class="btn  back-to-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
        </svg>
      </a>
    </div>
  );
};

export default Home;
