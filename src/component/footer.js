import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import {FaYoutube} from "react-icons/fa";
// import logo2 from "../img/logo2.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Footer() {
  return (
    <footer>
      {/* data-aos="fade-up" data-aos-duration="1000" */}
      <a href="/" className="footer__logo">
        {/* <img src={logo2} alt="" width="25%" /> */}
      </a>
     
      <ul className="permalinks" style={{ fontFamily: 'Instagram Sans Regular' }}>
        <li>
          <a href="/">Hackathon</a>
        </li>
        {/* <li>
          <a href="#learn"></a>
        </li> */}
        <li>
          <a href="/studymaterial">Study Material</a>
        </li>
        {/* <li>
          <a href="#sell">Ebook and Courses</a>
        </li> */}
        <li>
          <a href="/codelist">Code Library</a>
        </li>
        <li>
          <a href="/policy">Policy</a>
        </li>
        <li>
          <a href="/cancel">Cancellation Policy</a>
        </li>
        <li>
          <a href="/term">Term</a>
        </li>
        {/* <li>
          <a href="#talktous">Talk to us</a>
        </li> */}
       
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100090912099214&mibextid=LQQJ4d">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rccodex/">
          <FiInstagram />
        </a>
        <a href="https://www.youtube.com/@code_with_baghi/">
          <FaYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Listitdown powered by Rccodex and <a href='https://www.codeiox.in/'>Codeiox</a> All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
