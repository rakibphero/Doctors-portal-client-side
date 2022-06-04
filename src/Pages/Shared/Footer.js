import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover',
      }}
      className="p-16">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a href="https://youtube.com">Branding</a>
          <a href="https://youtube.com">Design</a>
          <a href="https://youtube.com">Marketing</a>
          <a href="https://youtube.com">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="https://youtube.com">About us</a>
          <a href="https://youtube.com">Contact</a>
          <a href="https://youtube.com">Jobs</a>
          <a href="https://youtube.com">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="https://youtube.com">Terms of use</a>
          <a href="https://youtube.com">Privacy policy</a>
          <a href="https://youtube.com">Cookie policy</a>
        </div>
      </div>
      <div className="text-center my-4 font-bold">
        <p>Copyright © 2022 - All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
