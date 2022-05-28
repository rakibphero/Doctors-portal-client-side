import React from "react";
import contact from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div style={{
        background:`url(${contact})`
    }}>
        <div className="text-center my-4">
            <h4 className="text-primary text-xl font-bold">Contact Us</h4>
            <h2 className="text-3xl text-white">Stay connected with us</h2>
        </div>
        <div>
        <form className="text-center">
        <input type="text" name="email" placeholder="Email Address" class="input input-bordered input-info w-full max-w-xs my-4" /><br />
        <input type="text" name="text" placeholder="Subject" class="input input-bordered input-info w-full max-w-xs" /><br />
        <input type="text" name="text" placeholder="Your Message" class="input input-bordered input-info w-full max-w-xs my-4 py-16" /><br />
        <button className="btn btn-primary px-6 my-2">Submit</button>
        </form>
    </div>
    </div>
  );
};

export default ContactUs;
