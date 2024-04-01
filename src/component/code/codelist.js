import React from 'react'
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
// import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import adimg from '../../image/courseimg.png'
import {Link} from 'react-router-dom';
import loder from '../loder.gif'


export default function Codelist() {
  const [value,setValue]=useState(null);
  const [res, setRes]=useState(true)
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
          setTimeout(async() => {
            
            await datafetch();
            setRes(false)
          }, 1000);
      
        }, [])
        const [query, setQuery] = useState('');
  const [results, setResults] = useState([23]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://listitdown-backend.vercel.app/code/search?q=${query}`);
       setResults(response.data);
       console.log('results', results)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <a href='https://ebook.rccodex.co.in/'>
              <img className='rounded shadow-2xl shadow-black' src={adimg} alt="Advertisement"/>
            </a>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-8 text-gray-900">Project Code Library</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
                className="mr-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
          
          {results.length !== 1 && results[0] !== 23 ? <h1>Results we got...</h1> : null}
  
          <div className="flex flex-wrap -m-2">
            {results.length !== 1 && results[0] !== 23 && results.map((val) => (
              <div key={val._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-1" src={val.image}/>
                  <div className="flex-grow">
                    <Link to={`/code/${val._id}`}>
                      <h2 className="text-gray-900 title-font font-semibold">{val.title}</h2>
                      <p className="text-blue-500">{val.label}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {results.length === 0 && results[0] !== 23 ? (
  <div className='mx-auto  mb-12 mt-4'>
    <div className="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
      <img className='mx-auto' style={{ display: 'block' }} src='https://i.giphy.com/3osxYC89Dw8RHY19OE.webp' alt="Loading" />
    </div>
      <h1 className='font-bold text-2xl my-2'>Nothing Found</h1>
    <br />
  </div>
) : null}

          </div>
            {results.length !== 1 && results[0] !== 23 ? <h1 className='mx-auto font-semibold text-2xl mt-4'>All Codelist</h1> : null}
  
          {res ? (
            <div className="flex justify-center ">
              <img src={loder} alt="Loader" />
            </div>
          ) : (
            <div className={results ? "flex flex-wrap mt-8" : "flex flex-wrap -m-2"}>
              {value && value.map((val) => (
                <div key={val._id} className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                  <div className="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-1" src={val.image}/>
                    <div className="flex-grow">
                      <Link to={`/code/${val._id}`}>
                        <h2 className="text-gray-900 title-font font-semibold">{val.title}</h2>
                        <p className="text-blue-500">{val.label}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Conditional Rendering for Error */}
      {/* {error ? <div>Error Occurred...</div> : null} */}
    </div>
  );
  
}


// import React, { useEffect, useState } from 'react';
// import introJs from 'intro.js';
// import 'intro.js/introjs.css';
// import loder from '../loder.gif';
// import output from'./output.wav'

// const Codelist = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [introInstance, setIntroInstance] = useState(null);

//   useEffect(() => {
//     const intro = introJs();
//     intro.setOptions({
//       steps: [
//         {
//           intro: "Welcome to the page!"
//         },
//         {
//           element: '#step1',
//           intro: "You can start doing something by clicking the New Item button."
//         },
//         {
//           element: '#step2',
//          intro: `
//           <div class='step-content'>
//             <div class='step-image'>
//               <img className='hidden' src='https://th.bing.com/th/id/OIP.c17XAqg6srb_lo1ElbyJSgAAAA?rs=1&pid=ImgDetMain' alt='Step 1 image' />
//               <audio controls autoplay>
//                 <source src='${output}' type='audio/mp3' />
//               </audio>
//             </div>
//           </div>
//         `,
//          position: 'bottom'
//         }
//       ]
//     });
//     setIntroInstance(intro);
//   }, []);

//   useEffect(() => {
//     if (introInstance) {
//       introInstance.onbeforechange(async function () {
//         if (this._currentStep === 1) {
//           setIsLoading(true);
//           setTimeout(() => {
//             setIsLoading(false);
//             introInstance.nextStep(); // Proceed to the next step
//           }, 3000);
//         }
//       });
//     }
//   }, [introInstance]);

//   useEffect(() => {
//     if (introInstance) {
//       introInstance.start();
//     }
//   }, [introInstance]);

//   return (
//     <div>
//       <div id="step1">Step 1 content</div>
//       <div id="step2">Step 2 content</div>
//       {isLoading && <img src={loder} alt="Loading..." />}
//     </div>
//   );
// }

// export default Codelist;


