import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ProjectReport from "./ProjectReport";

const Home = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Navbar />
      <ProjectReport />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
