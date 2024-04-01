import React, { useEffect, useState } from "react";
import "./hero.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
// import { useState } from 'react';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import output from'./homev.mp3'

AOS.init({
  duration: 1000,
});

const Hero = () => {
  const [toggleText, setToggleText] = useState("Deserve");
  const [toggleText1, setToggleText1] = useState("Bring!");
  const colors = ["red", "blue", "orange"];
  const [introInstance, setIntroInstance] = useState(null);


  function changeBackgroundColor() {
    const button = document.querySelector(".learn-more-btn");
    const currentColor = button.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    
    const nextIndex = (currentIndex + 1) % colors.length;
  
    button.style.backgroundColor = colors[nextIndex];
  }

const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("Submitted email:", email);
    setEmail("");
  let val={
    "email":email,
  }
    console.log(val);
    // Add logic here to send the data to your backend or perform other actions
    try{
      const response = await axios.post("https://listitdown-backend.vercel.app/email/add",val);
      window.alert("Your email is successfully submitted");
      console.log('response', response)
     
     } catch(error){
        console.error('Error sending data:', error);
      }


  };

  // const handleSubmit = async() => {
    // Use formData object for further processing or submission
    
  
  // }
  
 const myId = process.env.id
 console.log('myId', myId)


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
          <audio controls autoplay style='display: none;'> <!-- Hide audio controls -->
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

useEffect(()=>{

},[])

  return (
    <div className="body-container bg-slate-200">

   
      <div className="left-content">
        <h1 className="mainhead" style={{ fontFamily: 'Instagram Sans Bold' }}>
          We <span className="sty">{toggleText1}</span> <br />
          What you <span className="sty">{toggleText}</span>
        </h1>

        <div>
          <p className="learnmore" style={{ fontFamily: 'Instagram Sans Medium' }}>
          Grow together with 1M community <br /> with Exceptional Web Development Solutions – 
          <br/>
          Your Success,
       
Our Expertise!
<br/>
<p style={{ fontFamily: 'Instagram Sans Bold' ,fontSize:'30px'}} className="text-slate-900 my-4">Register to Get<br/> Hackathon Notification<br/> on your  Email! </p>
           
           
            {/* <button  style={{fontSize:'20px' }} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Register</button> */}
         <div className="">
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get Notification
      </button>
      < a href="https://ebook.rccodex.co.in/">
      <button 
        
        className="bg-red-500 hover:bg-red-700 mx-4  md:my-0 my-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get MERN Ebook
      </button>
</a>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-sm mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col p-4">
                {/* Modal header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Register Your Email</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none step4"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.293 2.293a1 1 0 0 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414l14-14zM2.707 2.293a1 1 0 0 1 0 1.414L16.707 18.707a1 1 0 1 1-1.414 1.414L1.293 3.707a1 1 0 0 1 1.414-1.414z"
                      />
                    </svg>
                  </button>
                </div>
                {/* Email input form */}
                <form onSubmit={handleSubmit}>
                  <label className="block mb-2">
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 steps4"
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        
          </p>
        </div>

       
      </div>

      <div className="review-section">
        <div className="reviewBody" style={{ fontFamily: 'Instagram Sans Regular' }}>
          <h2 className="text-5xl ">Our History</h2>
          <div className="about__cards m-4">
            <article className="about__card " id="one" data-aos="fade-up">
              <FaAward className="about__icon mx-auto" />
              <h5>Community</h5>
              <small>100K Members</small>
            </article>
            <article className="about__card" id="two" data-aos="fade-down">
              <FiUsers className="about__icon mx-auto" />
              <h5>Listed Hackathon</h5>
              <small>200+</small>
            </article>

            <article className="about__card " id="three" data-aos="fade-up">
              <VscFolderLibrary className="about__icon mx-auto " />
              <h5>Projects</h5>

              <small>100+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
