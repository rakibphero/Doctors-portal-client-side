import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center mt-16'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mt-4 mx-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white mt-2'>Make an Appointment Today</h2>
                <p className='sm:mx-2 text-white mt-8 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className='my-2'>
                <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
