import React from 'react';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const ContactUs = () => {

    return (
        <section className='my-28'>

            <div className='bg-contact-section-backImg'>
                <h5 className='text-base text-secondary font-bold text-center pt-10'>Contact Us</h5>
                <h2 className='text-2xl text-center text-white'>Stay Connected With Us</h2>

                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="Email Address" className="input input-bordered" />
                                </div>

                                <input type="text" placeholder="Subject" className="input input-bordered max-w-xs w-96" />

                                <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>

                                <div className="form-control mt-4 items-center">
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;