import React from 'react'
import { useState,useEffect } from 'react';

export default function Important({val}) {
return (
    <div>

<section className="text-gray-600 body-font">
  <div className='text-gray-900 font-bold text-3xl mt-7'>
    <h1>Recommended Hackathon</h1>
  </div>
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      {val.map((val) => {
        if (val.important === "true") {
          return (
            <div className="p-4 md:w-1/3" key={val.id}>
              <div className="h-full border-2 bg-gray-300 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
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
                    <span className="bg-green-500 p-1 pl-2 pr-2 rounded-full">Last Date : {val.ldate}</span>
                  </div>
                  <p className="leading-relaxed mb-3">{val.about.substring(0, 100)}...</p>

                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={val.link}>
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-black font-bold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 bg-green-500 p-1 pl-2 pr-2 rounded-full border-gray-200">
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
