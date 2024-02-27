import React from 'react'
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
// import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import adimg from '../../image/courseimg.png'
import {Link} from 'react-router-dom';

export default function Codelist() {
  const [value,setValue]=useState(null);
    let val = useSelector((state)=>state.data.items)
  async function datafetch(){

    if(val){
    setValue(val);
    console.log("inside if")
    }else
    console.log("inside else")
          
      
          try{

            const response = await axios.get("https://listitdown-backend.vercel.app/code/display")

            // const response = await axios.get("http://localhost:3002/code/display")
            console.log('Response from server:',response.data);
            setValue(response.data);
            // dispatch(addItem(response.data));
          }
            catch(error){
              console.error('Error sending data:', error);
            }
        }
      
        useEffect( () => {
         datafetch();
      
        }, [])

  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      <a href='https://ebook.rccodex.co.in/'>
      <img className='rounded shadow-2xl shadow-black' src={adimg}/></a>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 mt-8 text-gray-900">Project Code Library</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">

        
      </p>
    </div>
    <div class="flex flex-wrap -m-2"> 
    { value ? value.map((val) => (
       
       
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div class="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
        
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-1" src={val.image}/>
          <div class="flex-grow">
          <Link to={`/code/${val._id}`} >
            <h2 class="text-gray-900 title-font  font-semibold">{val.title}</h2>
            <p class="text-blue-500">{val.label}</p>
            </Link>
          </div>
          
        </div>
      </div>
    
       
    )):<h1>HHHHHHjjjjj</h1>}
    </div>
  </div>
</section>
    </div>
  )
}
