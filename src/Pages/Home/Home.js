import React from 'react';
import Banner from './Banner';
import Info from './Info';
import ServiceCard from './ServiceCard';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;