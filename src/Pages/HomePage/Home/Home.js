import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div id='home'>
            {/* <Navigation></Navigation> */}
            <Navbar></Navbar>
            <Banner></Banner>
            
            <Apartments></Apartments>
            <About></About>
    
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;