import React, { useEffect, useState } from "react";
import "./hero.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import output from './homev.mp3';
import { MdClose } from 'react-icons/md';

AOS.init({ duration: 1000 });

const Hero = () => {
  const [toggleText, setToggleText] = useState("Deserve");
  const [toggleText1, setToggleText1] = useState("Bring!");
  const [introInstance, setIntroInstance] = useState(null);
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
    let val = { email: email };
    try {
      const response = await axios.post("https://listitdown-backend.vercel.app/email/add", val);
      window.alert("Your email is successfully submitted");
      console.log('response', response);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '.step4',
          intro: `
          <div class='step-content'>
            <div class='step-image'>
              <img src='https://i.giphy.com/GAOOXrIDi7ev022LCg.webp' alt='Step 1 image' />
              <audio controls autoplay style='display: none;'>
                <source src='${output}' type='audio/mp3' />
              </audio>
            </div>
          </div>
          `,
          position: 'top'
        },
      ]
    });
    setIntroInstance(intro);
  }, []);

  return (
    <div className="body-container bg-slate-200">
      <div className="left-content p-8">
        <h1 className="mainhead font-bold text-4xl md:text-5xl">
          We <span className="sty text-red-500">{toggleText1}</span> <br />
          What you <span className="sty text-blue-500">{toggleText}</span>
        </h1>
        <div>
          <p className="learnmore text-lg mt-4">
            Grow together with 1M community <br /> with Exceptional Web Development Solutions – 
            <br />
            Your Success,
            <br />
            Our Expertise!
            <br />
            <p className="font-bold text-2xl mt-4">
              Register to Get<br /> Hackathon Notification<br /> on your Email!
            </p>
            <div className="mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Get Notification
              </button>
              <a href="https://ebook.rccodex.co.in/">
                <button
                  className="bg-red-500 hover:bg-red-700 mx-4 my-4 md:my-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Get MERN Ebook
                </button>
              </a>
            </div>
          </p>
        </div>
      </div>

      <div className="review-section">
        <div className="reviewBody p-8">
          <h2 className="text-5xl">Our History</h2>
          <div className="about__cards mt-4 flex space-x-4">
            <article className="about__card bg-white p-4 shadow-lg rounded-lg flex flex-col items-center" data-aos="fade-up">
              <FaAward className="about__icon text-4xl mb-2" />
              <h5>Community</h5>
              <small>100K Members</small>
            </article>
            <article className="about__card bg-white p-4 shadow-lg rounded-lg flex flex-col items-center" data-aos="fade-down">
              <FiUsers className="about__icon text-4xl mb-2" />
              <h5>Listed Hackathon</h5>
              <small>200+</small>
            </article>
            <article className="about__card bg-white p-4 shadow-lg rounded-lg flex flex-col items-center" data-aos="fade-up">
              <VscFolderLibrary className="about__icon text-4xl mb-2" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <MdClose className="h-6 w-6" /> {/* Using MdClose from react-icons */}
      </button>
      <h2 className="text-2xl font-bold mb-4">Get Hackathon Notifications</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="mb-2">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default Hero;
