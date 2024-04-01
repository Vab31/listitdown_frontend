import React, { useState } from 'react'
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import { useEffect } from 'react';
// import loder from '../loder.gif';
import output from'./homev.mp3'
import outputs from './studyv.mp3'
import outputp from './prov.mp3'
export default function Navigation() {
  const [fl , setFl]= useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [introInstance, setIntroInstance] = useState(null);

  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '.step1',
          intro: `
          <div class='step-content'>
          <div class='step-image'>
            <img src='https://i.giphy.com/GAOOXrIDi7ev022LCg.webp' alt='Step 1 image' />
            <audio controls autoplay style='display: none;'> <!-- Hide audio controls -->
              <source src='${output}' type='audio/mp3' />
            </audio>
          </div>
        </div>
          `,
          position: 'top'
        },
        {
          element: '.step2',
          intro: `
          <div class='step-content'>
          <div class='step-image'>
            <img src='https://i.giphy.com/VBEoqFlD71CgQGYiW5.webp' alt='Step 1 image' />
            <audio controls autoplay style='display: none;'> <!-- Hide audio controls -->
              <source src='${outputp}' type='audio/mp3' />
            </audio>
          </div>
        </div>
          `,
          position: 'top'
        },
        {
          element: '.step3',
          intro: `
          <div class='step-content'>
          <div class='step-image'>
            <img src='https://i.giphy.com/IsBh8jALIa0a7kHy33.webp' alt='Step 1 image' />
            <audio controls autoplay style='display: none;'> <!-- Hide audio controls -->
              <source src='${outputs}' type='audio/mp3' />
            </audio>
          </div>
        </div>
          `,
          position: 'top'
        },
       
        
      ]
    });
    setIntroInstance(intro);
  }, []);
  

 

 


  return (

<>
<div className="bg-slate-400 md:flex flex-row h-20 hidden">
<div className='justify-center my-auto md:ml-11 ml-2'>
<img src='https://see.fontimg.com/api/renderfont4/OVoWO/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjNEU1OUI5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGlzdGl0ZG93bg/aloevera.png' alt='listitdown'/>
</div>
<nav className = "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/' >Home</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer  step1 " href='/showhackathon'>Hackathon</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer " href=''>Imp Hackathon </a>
     <a className="mr-5 hover:text-gray-900 hover:cursor-pointer step2" href='/studymaterial'>Study Material</a>
       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer step3" href='/codelist'>Code Library</a>
    </nav>
    <div className=' justify-center my-auto mr-11 '>
       <button className=" md:inline-flex hidden items-center bg-sky-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-md font-semibold mt-4 md:mt-0" onClick={()=>{introInstance.start();}}>Website Tour
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
   
</div>
<div className='bg-slate-400 flex flex-col md:hidden '>
  <div className='flex flex-row my-2 ' onClick={()=>{setFl(!fl)}}>
    <div className='my-auto ml-2'>
    <img className='w-1/2' src='https://see.fontimg.com/api/renderfont4/OVoWO/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjNEU1OUI5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGlzdGl0ZG93bg/aloevera.png' alt='listitdown'/>

    </div>

    <div className='ml-auto mr-2' >
  
    <span class="block w-10 h-2 my-1 rounded bg-white"  ></span>
    <span class="block w-10 h-2 my-1 rounded bg-white" onClick={()=>{
      setFl(!fl)
      console.log('fl', fl)
      }}></span>
    <span className="block w-10 h-2 my-1 rounded bg-white"></span>
    </div>
    
  </div>
  <nav className={fl?'flex flex-col font-bold  mx-auto border-t-2 border-white':'md:flex flex-col font-bold  mx-auto hidden border-t-2 border-white'} >
  
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer my-1" href='/' >Home</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer my-1" href='/showhackathon'>Hackathon</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer my-1" href=''>Imp Hackathon </a>
     <a className="mr-5 hover:text-gray-900 hover:cursor-pointer my-1" href='/studymaterial'>Study Material</a>
       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer my-1" href='/codelist'>Code Library</a>
    </nav>

  

</div>

</>
  )
}


