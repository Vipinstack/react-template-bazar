import React from 'react';
import About from './About';
import Banner from './Banner';
import EditProfile from './EditProfile';
import Footer from './Footer';
import Header from './Header';
import Latestproduct from './Latest_product';
import Login from './Login';
import Products from './Products';
import Search from './Search';
import Slider from './Slider';
import Smallbanner from './Small_banner';
const Home = () => {
  return (
    <div>
        <Banner />
        <About />
        <Slider />
        <Products />
        <Smallbanner />
        <Latestproduct />
    </div>
  );
}

export default Home;
