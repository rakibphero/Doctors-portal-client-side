import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [

        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed.",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
            img: whitening
        }


    ];



    return (
        <div className='my-20'>
            <div className='text-center my-20'>
                <h4 className='text-primary text-xl font-bold uppercase'>Our Services</h4>
                <h3 className='text-4xl'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;