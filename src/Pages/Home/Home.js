import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceCard from './ServiceCard';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceCard></ServiceCard>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;