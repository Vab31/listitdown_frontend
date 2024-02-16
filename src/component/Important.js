import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import {Link} from 'react-router-dom';

export default function Important({val}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function   alertfunc  (props) {
    // window.alert(props);
    await dispatch(addItem(props));
    navigate('/detail');
    }


return (
    <div>

<section className="text-gray-600 body-font">
  <div className='text-gray-900 font-semibold md:text-3xl text-2xl mt-7'>
    <h1>Recommended Hackathon</h1>
  </div>
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4 md:-mt-24">
      {val.map((val) => {
        if (val.important === "true") {
          return (
            <div className="p-2 sm:p-10 md:w-1/3" key={val.id}>
              <div className="h-full border-2 bg-gray-300 shadow-2xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                {/* Added shadow-md for box shadow */}
                {/* <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={val.image}
                  alt="blog"
                /> */}
                <div className="p-6">
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                    {val.title}
                  </h1>
                  <div className="pl-2 pr-2 font-bold text-black rounded-full" style={{ fontFamily: "Instagram Sans Bold" }}>
                    <span className="bg-blue-400 p-1 pl-2 pr-2 rounded-full text-sm">Last Date : {val.ldate}</span>
                  </div>
                  <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>

                  <div className="flex items-center flex-wrap hover:cursor-pointer ">
                  <Link to={`/detail/${val._id}`}>
                    <div  className='text-sky-600 hover:cursor-pointer md:text-lg text-sm'> Learn More </div>
                   </Link>
                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none md:text-sm text-xs py-1 bg-blue-400 p-1 pl-2 pr-2 rounded-full border-gray-200">
                      {val.mode} | {val.prize ? val.prize : "No Prize"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null; // If not important, you can choose to return null or an empty fragment
      })}
    </div>
  </div>
</section>

    </div>
  )
}
