import React from 'react'
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import {Link} from 'react-router-dom';



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
  const [data, setData] = useState([]);
const [filtervalue, setFiltervalue] = useState(val);
const navigate = useNavigate();
const dispatch = useDispatch();
console.log("propdrill" , val);


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


  // const val = useSelector((state) => state.data.items);
  
  // useEffect(() => {
  //   setFiltervalue(val);
  //   console.log('vl', filtervalue);
    
    
  // }, []);
  return (
    <section className="text-gray-600 body-font bg-slate-200">
    {/* <p>{val[0].title}</p> */}
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
      </div>
      <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      {val.map((val) => {
        
          return (
            <div className="p-4 md:w-1/3" key={val.id}>
              <div className="h-full border-2 bg-gray-300 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                {/* Added shadow-md for box shadow */}
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={val.image}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                    {val.title}
                  </h1>
                  <div className="pl-2 pr-2 font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
                    <span className="bg-green-500 p-1 pl-2 pr-2 rounded-full">Last Date : {val.ldate}</span>
                  </div>
                  <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>

                  <div className="flex items-center flex-wrap hover:cursor-pointer " >
                  <Link to={`/detail/${val._id}`}>
                    <div  className='text-sky-600 hover:cursor-pointer'> Learn More </div>
                   </Link>
                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-green-500 p-1 pl-2 pr-2 rounded-full border-gray-200">
                      {val.mode} | {val.prize ? val.prize : "No Prize"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        
        return null; // If not important, you can choose to return null or an empty fragment
      })}
    </div>
  </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={showfunc}>See More</button>
    </div>
  </section>
  )
}

export default UpcomingHackathon;
