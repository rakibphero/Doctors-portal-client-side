import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle ='Opening Hour' cardText='Click the button to listen on Spotiwhy app' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle ='Visit our location'cardText='Rangpur, Khan 10036, Bangladesh' bgClass='bg-accent' img={location}></InfoCard>
            <InfoCard cardTitle ='Contact Us now'cardText='+8801823XXXXXX' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;