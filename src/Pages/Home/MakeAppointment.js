import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointmentPic from '../../assets/images/appointment.png';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointmentPic})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-125px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-20 pl-5 pb-5'>
                <h3 className='text-xl text-primary font-bold py-2'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white py-6'>The first step towards a beautiful,
                    healthy smile is to schedule an appointment.
                    Please contact our office by phone or complete the appointment request form.
                    Our new practice is conveniently located in Spearwood.
                    Plenty of parking is available in the front.
                    We are accessible via public transport. After-hours care is available.
                    We are open on Saturdays and Sundays.</p>
                <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
            </div>
        </section>
    );
};

export default MakeAppointment;