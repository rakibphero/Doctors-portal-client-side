import React from 'react';
import { Link } from 'react-router-dom';
import treatmentPic from '../../assets/images/treatment.png';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const ExCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row mb-20">
                <img className='w-[300px] lg:w-[458px] mr-10' src={treatmentPic} alt="" />
                <div className='w-[300px] lg:w-[497px]'>
                    <h2 className="text-4xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h2>
                    <p className="py-6">Exceptional Dental Care is a cheerful dental practice,
                        offering high-quality dental care in the heart of Spearwood.
                        We are wheelchair-accessible, caring and affordable.
                        We use new technologies for the comfort of our patients.
                        We have a Digital x-ray and OPG machine and an Intraoral camera is used
                        for patient's understanding of their oral condition.
                        <br />
                        At our dental clinic in Spearwood, we strive to provide our patients with an exceptional experience at the dentist.</p>
                    <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ExCare;