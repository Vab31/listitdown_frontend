// import React from 'react'

// export default function Studymaterial() {
//   return (
//     <div></div>
//   )
// }

import React from "react";
import "./project.css";
import IMG1 from "./IMG1.webp";
import IMG2 from "./database.jpg";
import IMG3 from "./oop.jpg";
import IMG4 from "./git.webp";
import IMG5 from "./html.png"
import adimg from '../image/courseimg.png'
// import img2 from "../img/pp3.jpg"
// import img3 from "../img/Project-Management-Post.jpg"
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Frontend project",
//     github: "https://github.com/Vab31/qrcode.git",
    
//     // demo: "https://pixabay.com/",
//   },
//   {
//     id: 2,
//     image: img3,
//     title: "Frontend Project 2",
//     github: "https://github.com/Vab31/finhunt_frontend",
//     // demo: "https://pixabay.com/",
//   },
//   {
//     id: 3,
//     image: img2,
//     title: "Project 3",
//     github: "https://github.com/Vab31/rcrepothree",
//     // demo: "https://pixabay.com/",
//   },
  {
    id: 3,
    image: IMG2,
    title: "Sql Notes",
    github: "https://drive.google.com/file/d/1e8LVkzRbexmDwT69b_cG5CX7chYGaJ5Y/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Oops Notes",
    github: "",
    // demo: "https://pixabay.com/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Computer Networking  Notes",
    github: "",
    // demo: "https://pixabay.com/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Git/Github cheat sheet",
    github: "https://drive.google.com/file/d/11ozSS2pC7rHmYvgskPTBBSEWeqqPfSeP/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },
  {
    id: 7,
    image: IMG5,
    title: "HTML cheat sheet",
    github: "https://drive.google.com/file/d/1i8g9shkkX5koW9xlJAGMAT2Drm3i2_kv/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },
  {
    id: 8,
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    title: "CSS cheat sheet",
    github: "https://drive.google.com/file/d/1ZUaHwB7A5kqjIClOEcsG843uRFv6itYL/view?usp=drive_link",
    // demo: "https://pixabay.com/",
  },


];

function Studymaterial() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "60px",
    padding: "10px",
    
  };

  const hrStyle = {
    width: "100%",
    marginTop:"20px",
    marginBottom:"20px"
  };

  return (
    <div style={serviceContainerStyle} id="resource" className="">
       
      <div className=" mx-10"  >
      <a href='https://ebook.rccodex.co.in/'>
            <img className='rounded shadow-2xl mb-10 shadow-black' src={adimg}/></a>

        <h1 style={{ fontFamily: 'Instagram Sans Bold'}} className="md:text-5xl text-2xl md:my-5"  >Resourses To help You Out :)</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div>
        <section id="project">
          <div className="container project__container">
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <article
                  key={id}
                  className="project__item md:h-96 w-80 h-40 shadow-2xl"
                  
                  style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", backdropFilter: "blur(8px)", // Adjust the blur amount as needed
                  backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the opacity value (0.5 for 50% opacity)
                  backdropOpacity: "0.5"  }}
                >
                  <div className="project__item-image md:h-60 h-20  " >
                    {/* <img id="img" src={image} alt={title} /> */}
                  </div>
                  {/* <h3 style={{ fontFamily: 'Instagram Sans Bold' }} className="text-red-600 text-2xl">{title}</h3> */}
                  <div className="mt-">
                  { github?
                    <a
                      href={github}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: 'Instagram Sans Regular' }}
                    >
                     {title}
                    </a>:
                    <a
                      onClick={()=>window.alert('We will add it soon!')}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: 'Instagram Sans Regular' }}
                    >
                      Get
                    </a>
                  }
                  
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Studymaterial;
