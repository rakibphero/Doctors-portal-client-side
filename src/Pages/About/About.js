import React from "react";

const About = () => {
  return (
    <section className="mt-10 px-5 py-5 bg-gray-100">
      <div>
        <h1 className="font-bold text-2xl mb-5 text-primary">About Us</h1>
        <p className="">In the last few years we have been proudly witnessing the astounding pace of progress in health care delivery system in the private sector in Bangladesh. Our doctors have made remarkable achievements in almost all specialties of medical science. Diagnostic facilities are getting latest technological advents. Patient-related services are becoming professional and patient-friendly. <br />
          Labaid Specialized Hospital has been established with the spirit and dedication focused on comprehensive medical care and management services. Multidisciplinary medical professionals have assembled with their expertise and experience on the common platform of Labaid Specialized Hospital to make it a complete and world-class healthcare service provider. Our patients will no more have to worry about where to go for best possible treatment.</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-5 mt-5 text-primary">Our Location</h1>
        <p> <span className="font-semibold text-lg">Address :</span> House-1 and, 6 Road No 4, Dinajpur 1205</p>
        <p> <span className="font-semibold text-lg">Hours :</span> Open 24 hours</p>
      </div>
      <div>
        <h1 className="font-bold text-lg text-primary mb-5 mt-5">WHAT MAKES US SPECIAL</h1>
        <ul>
          <li>* LASER TECHNOLOGY</li>
          <li>* PAINLESS INJECTION</li>
          <li>* 3D DENTAL SCANNER</li>
          <li>* DENTAL IMPLANT</li>
          <li>* DIGITAL SMILE DESIGN</li>
        </ul>
      </div>
    </section>
  );
};

export default About;