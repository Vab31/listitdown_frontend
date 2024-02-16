import React from 'react'
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import {Link} from 'react-router-dom';
import crdbg from './crdbg.png';
import loder from './loder.gif'


 function ShowHackathon() {


    const [value,setValue]=useState(null);
    let val = useSelector((state)=>state.data.items)
    
 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function datafetch(){

if(val){
setValue(val);
console.log("inside if")
}else
console.log("inside else")
      
  
      try{
        const response = await axios.get("https://listitdown-backend.vercel.app/list/display")
        console.log('Response from server:',response.data);
        setValue(response.data);
        dispatch(addItem(response.data));
      }
        catch(error){
          console.error('Error sending data:', error);
        }
    }
  
    useEffect( () => {
     datafetch();
  
    }, [])

    async function   alertfunc  (props) {
        // window.alert(props);
        await dispatch(addItem(props));
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
             )
        }

  return (



<section className="text-gray-600 body-font">
  
     <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Upcoming Hackathon</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Unleash Your Potential: Collaborate, learn, and build something amazing.</p>
      </div>
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
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">The Catalyzer</h1>
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
  </div>
</section> 
  )
}

export default ShowHackathon;
