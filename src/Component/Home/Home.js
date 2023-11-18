import React from 'react'; 
import Header from '../Page/Header/Header';
import About from '../Page/About/About';
import Service from '../Page/Service/Service';
import Pricing from '../Page/Priceing/Pricing';
import Footer from '../Footer/Footer';
import Partners from '../Page/Partners/Partners';
import Technology from '../Page/Technology/Technology';
import Outlet from '../Footer/Outlet';
import Clients from '../Page/Clients/Clients';
import './Home.css';
import SlideCard from '../Page/Priceing/SlideCard.js/SlideCard';
const Home = () => {
    return (
        <div>
            <Header> </Header>
            <About></About>  
            <Pricing></Pricing>
            <Service></Service>
            <Clients></Clients>
            <Technology></Technology>
            <Partners></Partners> 
            <Footer></Footer>
            
        </div>
    );
};

export default Home;