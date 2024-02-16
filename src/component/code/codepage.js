import React, { useState,useEffect } from 'react'
import copy from "copy-to-clipboard";
import { useParams } from 'react-router-dom';
// import Hero from './hero';
import axios from 'axios';

export default function Codepage() {
    const [html,setHtml] =useState(`<div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    <a className="text-indigo-500 inline-flex items-center">Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>6
      </span>
    </div>
  </div>`)

  const [da, setDa] = useState({});
  const { _id } = useParams(); // Using useParams hook to get parameters from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://listitdown-backend.vercel.app/code/display/${_id}`);
        setDa(response.data[0]);
        console.log('data', response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [_id]); 

  const copyToClipboard = () => {
    copy(da.html);
    alert(`You have copied..`);
};
  const copyToClipboardcss = () => {
    copy(da.css);
    alert(`You have copied..`);
};
  const copyToClipboardjs = () => {
    copy(da.js);
    alert(`You have copied..`);
};
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">{da.title}</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{da.label}</p>
    <div className="border-t-4 w-20 rounded mx-auto border-gray-400 my-2"></div>
    </div>
    <p className="leading-relaxed text-base mb-4">{da.about} </p>
  </div>

</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-black bg-opacity-75 px-8 text-red-500 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML</h1>
          <button onClick={copyToClipboard} className='bg-blue-400 px-3 my-4 text-white rounded-md font-medium items-center'>Copy</button><br/>
           <code>{da.html}</code>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
      <div className="h-full bg-black bg-opacity-75 px-8 text-red-500 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CSS</h1>
          <button onClick={copyToClipboardcss} className='bg-blue-400 px-3 my-4 text-white rounded-md font-medium items-center'>Copy</button><br/>

           <code>{da.css}</code>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
      <div className="h-full bg-black bg-opacity-75 px-8 text-red-500 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Javascript</h1>
          <button onClick={copyToClipboardjs} className='bg-blue-400 px-3 my-4 text-white rounded-md font-medium items-center'>Copy</button><br/>

           <code>{da.js}</code>
          
        </div>
      </div>

      <div className='w-screen h-20 mx-4 rounded-md text-red-500 bg-black items-end py-4'>
{da.link}
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
