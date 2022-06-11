import React from "react";
import { Link } from "react-router-dom";
import chair from '../../assets/images/chair.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
        <div className=''>
          <h1 className="text-5xl font-bold">Your Smile Starts Here</h1>
          <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quibusdam magnam repudiandae ex. Quae perspiciatis alias, velit voluptas nihil inventore necessitatibus? Voluptate, in consectetur, itaque, numquam dolorum minima nemo veniam ut id voluptatibus accusantium architecto officiis. Assumenda nesciunt, a illum debitis, sequi odit veniam vero architecto cupiditate, iusto iste sunt.</p>
          <PrimaryButton><Link to='/appointment'>Get Started</Link> </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
