import React, { useEffect, useState } from 'react'
import Hero from './hero'
import {useSelector } from 'react-redux';

export default function Detail() {
    const[da,setDa]=useState([{
          
    }]);
    let id= useSelector((state) => state.id.idno);
    let val= useSelector((state)=>state.data.items)
    useEffect(() => {
        setDa(val.filter(item =>item._id==id));
        console.log(da[0]);
    }, [])
    
  
    return (
        <>
        {/* <Hero/> */}
        <section className="text-gray-600 body-font overflow-hidden ">
           <div className="container px-5 py-24 mx-auto ">
                <div className="lg:w-4/5 mx-auto flex flex-wrap bg-slate-300 md:pl-3 p-3">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4"> {da[0].title ? da[0].title :"" } </h1>
                        <div className="flex mb-4">
                            {/* <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a> */}
                            <a className="flex-grow border-b-2 border-gray-300 py-2  border-indigo-500 text-lg px-1">Details</a>
                            {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                        </div>
                        <p className="leading-relaxed mb-4">
                        {da[0].about ? da[0].about :"" }
                       </p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-700 font-bold">Prize</span>
                            <span className="ml-auto text-gray-900 font-bold"> {da[0].prize ? da[0].prize :"" }</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-700 font-bold">Eligibilty</span>
                            <span className="ml-auto text-gray-900 font-bold"> {da[0].eligibility ? da[0].eligibility :"" }</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-700 font-bold">Last Date</span>
                            <span className="ml-auto text-gray-900 bg-green-500 p-1 rounded-full font-bold"> {da[0].ldate ? da[0].ldate :"" }</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-semibold text-xl text-gray-900"> {da[0].label ? da[0].label :"" } </span>
                            <a href={da[0].link}>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                            </a>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src= {da[0].image ? da[0].image :"" } />
                </div>
            </div>
         
        </section>
        </>
    )
}
