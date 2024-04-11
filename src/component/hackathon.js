import React from 'react'
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import {Link} from 'react-router-dom';
import crdbg from './crdbg.png'
import loder from './loder.gif'



 function UpcomingHackathon({val}) {

  // {
  //   id:9,
  //   title: "Google Hackathon",
  //   prize: "$1200",
  //   mode:"online",
  //   about: "Lorem the good man is shere and am really proud of him so lets go and discuss about he the importance of what we are going",
  //   link:"https://www.google.com",
  //   eligibility:"CSE Student",
  //   image:"https://blog.hubspot.com/hubfs/image8-2.jpg",
  //   label:"#cse #online",
  //   important:"false",
  //   ldate:"12-12-2023",
  //       },

const navigate = useNavigate();
const dispatch = useDispatch();
console.log("propdrill" , val);
// useEffect(()=>{
// setTimeout(async() => {
//   await val;
//   console.log("ky",val);
//   setRes(false);
// }, 1000);
// },val);



if(val.length > 8){
  val=val.slice(0,8);
  
}
async function   alertfunc  (props) {
  // window.alert(props);
  await dispatch(addItem(props));
  navigate('/detail');
  }
function showfunc() {
  
  navigate('/showhackathon');
  }


  return (
    <section className="text-gray-600 body-font bg-slate-200">
    {/* <p>{val[0].title}</p> */}
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Embrace the Unknown: Step outside your comfort zone and explore new possibilities.</p>
        
      </div>
      <div className="container px-5 py-20 mx-auto">
      {val.length == 0 ? (
          <div className="flex  justify-center ">
            <img src={loder} alt="Loader" />
          </div>
        ):(
    <div className="flex flex-wrap -m-4">
      {val.map((val) => (
        
        <div className="p-2 sm:p-10 md:w-1/3" key={val.id} >
        <div className="h-full border-2 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${crdbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='rounded-full mx-auto bg-red-400 w-40 h-40 mt-7'>
          <img className="h-full w-full object-cover rounded-full"src={val.image}
                  alt="blog"/>

          </div>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
            <div class="border-t-4 w-10 rounded mx-auto border-gray-400 my-2"></div>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">{val.title}</h1>
            <div className="pl-2 pr-2 font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
                    <span className="bg-blue-400 p-1 md:pl-2 md:pr-2 rounded-full text-sm">Last Date : {val.ldate}</span>
                  </div>
            <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>
            <div className="flex items-center flex-wrap ">
              {/* <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
                                 <Link to={`/detail/${val._id}`} className='text-sky-600 hover:cursor-pointer md:text-lg text-sm font-bold'>
                 {/* <div  className='text-sky-600 hover:cursor-pointer'> Learn More </div> */}
                   {/* <div onClick={()=>{alertfunc(val._id)}} className='text-sky-600 hover:cursor-pointer'> Learn More </div> */}
                   Learn More
                   </Link>

                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none md:text-sm text-xs py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
                      {val.mode} | {val.prize ? val.prize : "No Prize"}
                    </span>
              
            </div>
          </div>
        </div>
      </div>
        
        // If not important, you can choose to return null or an empty fragment
      ))}
    </div>
        )}
  </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={showfunc}>See More</button>
    </div>
  </section>
  )
}

export default UpcomingHackathon;
