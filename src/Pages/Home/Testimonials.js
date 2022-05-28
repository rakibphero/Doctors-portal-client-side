import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';


const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Nelson Mendela',
            review:'good work',
            location:'Canada',
            img: people1,
        },
        {
            _id:2,
            name: 'Nelson Mendela',
            review:'good work',
            location:'Canada',
            img: people2,
        },
        {
            _id:3,
            name: 'Nelson Mendela',
            review:'good work',
            location:'Canada',
            img: people3,
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
            <div>
                <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
                <h2 className='text-3xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img src={quote} className='w-24 lg:w-44 mb-4' alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;