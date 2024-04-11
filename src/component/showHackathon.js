// import React from 'react'
// import { useState,useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
// import {useSelector,useDispatch} from 'react-redux';
// import { addItem } from '../slice/hackathonidSlice';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import crdbg from './crdbg.png';
// import loder from './loder.gif'


//  function ShowHackathon() {


//     const [value,setValue]=useState(null);
//     let val = useSelector((state)=>state.data.items)
    
 
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     async function datafetch(){

// if(val){
// setValue(val);
// console.log("inside if")
// }else
// console.log("inside else")
      
  
//       try{
//         const response = await axios.get("https://listitdown-backend.vercel.app/list/display")
//         console.log('Response from server:',response.data);
//         setValue(response.data);
//         dispatch(addItem(response.data));
//       }
//         catch(error){
//           console.error('Error sending data:', error);
//         }
//     }
  
//     useEffect( () => {
//      datafetch();
  
//     }, [])

//     async function   alertfunc  (props) {
//         // window.alert(props);
//         await dispatch(addItem(props));
//         navigate('/detail');
//         }

//         function showfunc() {
  
//           navigate('/showhackathon');
//           }


//           if (!value) {
//             return (
//               <div>
//                 <h1>HHHHHHHHHHHHHHH</h1>
//              <img src={loder} className='h-10 w-10' alt="Loading..." />
//              </div>
//              )
//         }

//   return (



// <section className="text-gray-600 body-font">
  
//      <div className="container px-5 py-24 mx-auto">
//       <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
//         <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Unleash Your Potential: Collaborate, learn, and build something amazing.</p>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//           <div className="relative w-auto max-w-sm mx-auto my-6">
//             <div className="bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col p-4">
//                 {/* Modal header */}
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold">Question</h3>
//                   <button
//                     onClick={() => setIsModalOpen(false)}
//                     className="text-gray-500 hover:text-gray-700 focus:outline-none step4"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M17.293 2.293a1 1 0 0 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414l14-14zM2.707 2.293a1 1 0 0 1 0 1.414L16.707 18.707a1 1 0 1 1-1.414 1.414L1.293 3.707a1 1 0 0 1 1.414-1.414z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 {/* Email input form */}
//                 <h1>Slider</h1>
                
//      <div className="slider relative overflow-hidden">
//       <div className="cards flex transition-transform duration-500 h-1/2" >
      
//       {Array.from({ length: 3 }, (_, index) => (
//             <div
//             className={`card p-8 m-4 h-1/2flex-shrink-0 border border-gray-200 rounded-lg ${
//               activeIndex === index ? 'active' : 'hidden'
//             }`}
//           >
//             <h3 className="text-xl font-semibold mb-2">{yu[index].op}</h3>
//             <p className="text-gray-600" onClick={()=>{
//              if (index==0) {
//               setOne(yu[index].op)
//              } else if(index==1) {
//               setTwo(yu[index].op)
//              } else{
//               setThree(yu[index].op)
//              }
      
//             }
//             }>{yu[index].o1}</p>
//             <p className="text-gray-600" onClick={()=>{
//              if (index==0) {
//               setOne(yu[index].o2)
//              } else if(index==1) {
//               setTwo(yu[index].o2)
//              } else{
//               setThree(yu[index].o2)
//              }
      
//             }
//             }>{yu[index].o2}</p>
//             <p className="text-gray-600" onClick={()=>{
//              if (index==0) {
//               setOne(yu[index].o3)
//              } else if(index==1) {
//               setTwo(yu[index].o3)
//              } else{
//               setThree(yu[index].o3)
//              }
      
//             }
//             }>{yu[index].o3}</p>
//             <p className="text-gray-600" onClick={()=>{
//              if (index==0) {
//               setOne(yu[index].o4)
//              } else if(index==1) {
//               setTwo(yu[index].o4)
//              } else{
//               setThree(yu[index].op)
//              }
      
//             }
//             }>{yu[index].o4}</p>
//           </div>
//         ))}
//       </div>
//       <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l-md z-10" onClick={handlePrev}>
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r-md z-10" onClick={handleNext}>
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {value.length == 0 ? (
//           <div className="flex  justify-center ">
//             <img src={loder} alt="Loader" />
//           </div>
//         ):(
//     <div className="flex flex-wrap -m-4">
//     {value ? value.map((val) => (
//       <div className="p-2 sm:p-10 md:w-1/3" key={val.id} >
//         <div className="h-full border-2 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${crdbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
//           <div className='rounded-full mx-auto bg-red-400 w-40 h-40 mt-7'>
//           <img className="h-full w-full object-cover rounded-full"src={val.image}
//                   alt="blog"/>

//           </div>
//           <div className="p-6">
//             <div class="border-t-4 w-10 rounded mx-auto border-gray-400 my-2"></div>
//             <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{val.title}</h1>
//             <div className="font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
//                     <span className="bg-blue-400 p-1 pl-2 pr-2 text-sm  rounded-full">Last Date : {val.ldate}</span>
//                   </div>
//             <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>
//             <div className="flex items-center flex-wrap ">
          
//                                  <Link to={`/detail/${val._id}`} className='text-sky-600 hover:cursor-pointer  text-sm font-bold'>
//                  Learn More
//                    </Link>

//                     <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
//                       {val.mode} | {val.prize ? val.prize : "No Prize"}
//                     </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//         )): (
//           <>
//            <h1>HHHHHHHHHHHHHHH</h1>
//             <img src={loder} className='h-10 w-10' /> </>// Display loader image while fetching data
//           )}
     
//     </div>
//         )}
//   </div>
// </section> 
//   )
// }

// export default ShowHackathon;



import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import crdbg from './crdbg.png';
import loder from './loder.gif';

function ShowHackathon() {
    const [value, setValue] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const yu = [
      { op: "Option 1", o1: "Option 1A", o2: "Option 1B", o3: "Option 1C", o4: "Option 1D" },
      { op: "Option 2", o1: "Option 2A", o2: "Option 2B", o3: "Option 2C", o4: "Option 2D" },
      { op: "Option 3", o1: "Option 3A", o2: "Option 3B", o3: "Option 3C", o4: "Option 3D" }
    ];
    
    const val = useSelector((state) => state.data.items);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function datafetch() {
        if (val) {
            setValue(val);
            console.log("inside if");
        } else {
            console.log("inside else");
        }

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

    if (!value) {
        return (
            <div>
                <h1>HHHHHHHHHHHHHHH</h1>
                <img src={loder} className='h-10 w-10' alt="Loading..." />
            </div>
        );
    }

    function showresult(){
      console.log('one', one);
      console.log('two', two);
      console.log('three', three);
    }

     return (



<section className="text-gray-600 body-font">
  
     <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Unleash Your Potential: Collaborate, learn, and build something amazing.</p>
      <button onClick={()=>setIsModalOpen(true)}>open</button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-sm mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col p-4">
                {/* Modal header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Question</h3>
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
                <h1>Slider</h1>
                
     <div className="slider relative overflow-hidden">
      <div className="cards flex transition-transform duration-500 h-1/2" >
      
      {Array.from({ length: 3 }, (_, index) => (
            <div
            className={`card p-8 m-4 h-1/2flex-shrink-0 border border-gray-200 rounded-lg ${
              activeIndex === index ? 'active' : 'hidden'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{yu[index].op}</h3>
            <p className="text-gray-600" onClick={()=>{
             if (index==0) {
              setOne(yu[index].o1)
             } else if(index==1) {
              setTwo(yu[index].o2)
             } else{
              setThree(yu[index].o3)
             }
      
            }
            }>{yu[index].op}</p>
            <p className="text-gray-600" onClick={()=>{
             if (index==0) {
              setOne(yu[index].o1)
             } else if(index==1) {
              setTwo(yu[index].o2)
             } else{
              setThree(yu[index].o3)
             }
      
            }
            }>{yu[index].op}</p>
            <p className="text-gray-600" onClick={()=>{
             if (index==0) {
              setOne(yu[index].o1)
             } else if(index==1) {
              setTwo(yu[index].o2)
             } else{
              setThree(yu[index].o3)
             }
      
            }
            }>{yu[index].o3}</p>
            <p className="text-gray-600" onClick={()=>{
             if (index==0) {
              setOne(yu[index].o4)
             } else if(index==1) {
              setTwo(yu[index].o4)
             } else{
              setThree(yu[index].op)
             }
      
            }
            }></p>
          </div>
        ))}
      </div>
      <button onClick={()=>showresult()}>show</button>
      <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l-md z-10" onClick={handlePrev}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r-md z-10" onClick={handleNext}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {value.length == 0 ? (
          <div className="flex  justify-center ">
            <img src={loder} alt="Loader" />
          </div>
        ):(
    <div className="flex flex-wrap -m-4">
    {value ? value.map((val) => (
      <div className="p-2 sm:p-10 md:w-1/3" key={val.id} >
        <div className="h-full border-2 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${crdbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='rounded-full mx-auto bg-red-400 w-40 h-40 mt-7'>
          <img className="h-full w-full object-cover rounded-full"src={val.image}
                  alt="blog"/>

          </div>
          <div className="p-6">
            <div class="border-t-4 w-10 rounded mx-auto border-gray-400 my-2"></div>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{val.title}</h1>
            <div className="font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
                    <span className="bg-blue-400 p-1 pl-2 pr-2 text-sm  rounded-full">Last Date : {val.ldate}</span>
                  </div>
            <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>
            <div className="flex items-center flex-wrap ">
          
                                 <Link to={`/detail/${val._id}`} className='text-sky-600 hover:cursor-pointer  text-sm font-bold'>
                 Learn More
                   </Link>

                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
                      {val.mode} | {val.prize ? val.prize : "No Prize"}
                    </span>
              
            </div>
          </div>
        </div>
      </div>
        )): (
          <>
           <h1>HHHHHHHHHHHHHHH</h1>
            <img src={loder} className='h-10 w-10' /> </>// Display loader image while fetching data
          )}
     
    </div>
        )}
  </div>
</section> 
  )
}



export default ShowHackathon;
