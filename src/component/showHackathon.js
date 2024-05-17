

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem } from '../slice/hackathonidSlice';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import crdbg from './crdbg.png';
// import loder from './loder.gif';
// import { flushSync } from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import  './sh.css'


// function ShowHackathon() {

//   const [value, setValue] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [one, setOne] = useState('');
//   const [two, setTwo] = useState('');
//   const [three, setThree] = useState('');
  

  
//   const yu = [
//     { op: "In which year you are?", o1: "1 year", o2: "2 year", o3: "3 year", o4: "4 year" },
//     { op: "Mode of Hackathon?", o1: "Online", o2: "Onsite"},
//     { op: "Price", o1: "Paid", o2: "Free" },
//     {op:null}
//   ];

//   const val = useSelector((state) => state.data.items);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   async function datafetch() {
//       try {
//           const response = await axios.get("https://listitdown-backend.vercel.app/list/display");
//           console.log('Response from server:', response.data);
//           setValue(response.data);
//           dispatch(addItem(response.data));
//       } catch (error) {
//           console.error('Error sending data:', error);
//       }
//   }

//   useEffect(() => {
//       datafetch();
//   }, []);

//   function handlePrev() {
//       setActiveIndex((prevIndex) => (prevIndex === 0 ? value.length - 1 : prevIndex - 1));
//   }

//   function handleNext() {
//       setActiveIndex((prevIndex) => (prevIndex === value.length - 1 ? 0 : prevIndex + 1));
//   }

//   function alertfunc(props) {
//       dispatch(addItem(props));
//       navigate('/detail');
//   }

//   function showfunc() {
//       navigate('/showhackathon');
//   }

//   async function showresult() {
//     console.log('one', one);
//     console.log('two', two);
//     console.log('three', three);
//     // console.log('mrk', mrk);

//     // Filter the data based on modal questions
//      const filteredData =await value.filter(item => {
//         // Filter based on the first modal question
//         if (two && (item.mode == "Offline" || item.mode=="Onsite")) {
//             return true;
//         }
//         if (two && (item.mode == "Online")) {
//             return true;
//         }
        
//         // Filter based on the second modal question (assuming 'Paid' and 'Free' are the options)
//         if (three === "Paid" && item.prize) {
//             return true;
//         }
//         if (three === "Free" && (!item.prize || item.prize=='NA')) {
//             return true;
//         }

//         // Filter based on the third modal question
//         // if (mrk && item.mrk === mrk) {
//         //     return true;
//         // }

//         // Add more conditions for other modal questions as needed
        
//         return false; // If none of the conditions match, exclude the item from the filtered data
//     });

//     // Do something with the filtered data
//     console.log('Filtered Data:', filteredData);
// }
// // console.log('re.user',req.user);


//   // const [activeIndex, setActiveIndex] = useState(null);

//   const handleOptionClick = (index, value) => {
//     // Perform any actions you want when an option is clicked
//     console.log(`Option ${index + 1} clicked: ${value}`);
//     setActiveIndex(index);
//     if(index==0){
//        setOne(value)
//     }
//     if(index==1){
//        setTwo(value)
//     }
//     if(index==2){
//        setThree(value)
//     }
    
//   };

//    return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
//           <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Unleash Your Potential: Collaborate, learn, and build something amazing.</p>
//           <button onClick={() => setIsModalOpen(true)} className='bg-blue-700 p-3 my-2 text-white rounded-md'>Set Prefrence</button>
//         </div>
//         {isModalOpen && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//     <div className="relative max-w-screen-md mx-auto my-6"> {/* Adjusted max-width */}
//       <div className="bg-white rounded-lg shadow-lg">
//         <div className="flex flex-col p-4">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold w-56 text-center mx-auto">Question</h3> {/* Fixed width for question box */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="text-gray-500 hover:text-gray-700 focus:outline-none step4"
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>
         
          
//           <div className="slider relative overflow-hidden mx-auto ">
//             <div className="cards flex transition-transform duration-500 h-1/2 ">
//             {Array.from({ length: 4 }, (_, index) => (
//   <div key={index} className={`card p-6 m-4 flex-shrink-0 border border-gray-200 rounded-lg shadow-lg ${activeIndex === index ? 'active' : 'hidden'}`}>
//     <h3 className="text-xl font-semibold mb-4">{yu[index].op}</h3>
//     <div className="options">
//       <p className="option" onClick={() => handleOptionClick(index, yu[index].o1)}>{yu[index].o1}</p>
//       <p className="option" onClick={() => handleOptionClick(index, yu[index].o2)}>{yu[index].o2}</p>
//       <p className="option" onClick={() => handleOptionClick(index, yu[index].o3)}>{yu[index].o3}</p>
//     </div>
//     {index === 3 && ( 
//       <button onClick={showresult} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//         Show Result
//       </button>
//     )}
//   </div>
// ))}

//             </div>
//             <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l-md z-10" onClick={handlePrev}>
//               Prev
//             </button>
//             <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r-md z-10" onClick={handleNext}>
//               Next
//             </button>
//             {/* Show Result button moved inside the modal */}
            
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//         <div className="flex flex-wrap -m-4">
//           {value && value.map((val) => (
//             <div className="p-2 sm:p-10 md:w-1/3" key={val._id} >
//               <div className="h-full border-2 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${crdbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
//                 <div className='rounded-full mx-auto bg-red-400 w-40 h-40 mt-7'>
//                   <img className="h-full w-full object-cover rounded-full" src={val.image} alt="blog" />
//                 </div>
//                 <div className="p-6">
//                   <div class="border-t-4 w-10 rounded mx-auto border-gray-400 my-2"></div>
//                   <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{val.title}</h1>
//                   <div className="font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
//                     <span className="bg-blue-400 p-1 pl-2 pr-2 text-sm rounded-full">Last Date : {val.ldate}</span>
//                   </div>
//                   <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>
//                   <div className="flex items-center flex-wrap ">
//                     <Link to={`/detail/${val._id}`} className='text-sky-600 hover:cursor-pointer text-sm font-bold'>
//                       Learn More
//                     </Link>
//                     <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
//                       {val.mode} | {val.prize ? val.prize : "No Prize"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section> 
// )}

// export default ShowHackathon;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import crdbg from './crdbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './sh.css';

function ShowHackathon() {
  const [value, setValue] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');

  const yu = [
    { op: "In which year you are?", o1: "1 year", o2: "2 year", o3: "3 year", o4: "4 year" },
    { op: "Mode of Hackathon?", o1: "Online", o2: "Onsite" },
    { op: "Price", o1: "Paid", o2: "Free" },
    { op: null }
  ];

  const val = useSelector((state) => state.data.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function datafetch() {
    try {
      const response = await axios.get("https://listitdown-backend.vercel.app/list/display");
      console.log('Response from server:', response.data);
      setValue(response.data);
      dispatch(addItem(response.data));
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }

  useEffect(() => {
    datafetch();
  }, []);

  function handlePrev() {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? value.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setActiveIndex((prevIndex) => (prevIndex === value.length - 1 ? 0 : prevIndex + 1));
  }

  function alertfunc(props) {
    dispatch(addItem(props));
    navigate('/detail');
  }

  function showfunc() {
    navigate('/showhackathon');
  }

  async function showresult() {
    console.log('one', one);
    console.log('two', two);
    console.log('three', three);

    const filteredData = await value.filter(item => {
      if (two=='Onsite' && (item.mode === "Offline" || item.mode === "Onsite")) {
        return true;
      }
      if (two && item.mode === "Online") {
        return true;
      }

      if (three === "Paid" && item.prize != 'NA' && item.prize) {
        return true;
      }
      if (three === "Free" && (!item.prize || item.prize == 'NA')) {
        return true;
      }

      return false;
    });

    console.log('Filtered Data:', filteredData);
    setFilteredData(filteredData); // Update state with filtered data
    setIsModalOpen(false); // Close modal after showing result
  }

  const handleOptionClick = (index, value) => {
    console.log(`Option ${index + 1} clicked: ${value}`);
    setActiveIndex(index);
    if (index === 0) {
      setOne(value);
    }
    if (index === 1) {
      setTwo(value);
    }
    if (index === 2) {
      setThree(value);
    }
  };

  const dataToDisplay = filteredData || value;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Unleash Your Potential: Collaborate, learn, and build something amazing.</p>
          <button onClick={() => setIsModalOpen(true)} className='bg-blue-700 p-3 my-2 text-white rounded-md'>Set Preference</button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-screen-md mx-auto my-6">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="flex flex-col p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold w-56 text-center mx-auto">Question</h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none step4"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  <div className="slider relative overflow-hidden mx-auto ">
                    <div className="cards flex transition-transform duration-500 h-1/2 ">
                      {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className={`card p-6 m-4 flex-shrink-0 border border-gray-200 rounded-lg shadow-lg ${activeIndex === index ? 'active' : 'hidden'}`}>
                          <h3 className="text-xl font-semibold mb-4">{yu[index].op}</h3>
                          <div className="options">
                            <p className="option" onClick={() => handleOptionClick(index, yu[index].o1)}>{yu[index].o1}</p>
                            <p className="option" onClick={() => handleOptionClick(index, yu[index].o2)}>{yu[index].o2}</p>
                            <p className="option" onClick={() => handleOptionClick(index, yu[index].o3)}>{yu[index].o3}</p>
                          </div>
                          {index === 3 && (
                            <button onClick={showresult} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                              Show Result
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l-md z-10" onClick={handlePrev}>
                      Prev
                    </button>
                    <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r-md z-10" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap -m-4">
          {dataToDisplay && dataToDisplay.map((val) => (
            <div className="p-2 sm:p-10 md:w-1/3" key={val._id}>
              <div className="h-full border-2 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${crdbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='rounded-full mx-auto bg-red-400 w-40 h-40 mt-7'>
                  <img className="h-full w-full object-cover rounded-full" src={val.image} alt="blog" />
                </div>
                <div className="p-6">
                  <div className="border-t-4 w-10 rounded mx-auto border-gray-400 my-2"></div>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{val.title}</h1>
                  <div className="font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
                    <span className="bg-blue-400 p-1 pl-2 pr-2 text-sm rounded-full">Last Date : {val.ldate}</span>
                  </div>
                  <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={`/detail/${val._id}`} className='text-sky-600 hover:cursor-pointer text-sm font-bold'>
                      Learn More
                    </Link>
                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
                      {val.mode} | {val.prize ? val.prize : "No Prize"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShowHackathon;

