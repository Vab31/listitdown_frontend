import React, { useState } from 'react'

export default function Navigation() {
  const [fl , setFl]= useState(false);

  return (
//     <div>
//         <header className="text-slate-900 font-semibold bg-slate-400 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
//       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg> */}
//       <img src='https://see.fontimg.com/api/renderfont4/OVoWO/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjNEU1OUI5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGlzdGl0ZG93bg/aloevera.png' alt='listitdown'/>
//       {/* <span className="ml-3 text-xl hover:cursor-pointer" >ListItDown</span> */}
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/' >Home</a>
//       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/showhackathon'>Hackathon</a>
//       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href=''>Imp Hackathon </a>
//       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/studymaterial'>Study Material</a>
//       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/codelist'>Code Library</a>
//     </nav>
//     <button className="inline-flex items-center bg-sky-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-md font-semibold mt-4 md:mt-0">Contact Us
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>
//     </div>
<>
<div className="bg-slate-400 md:flex flex-row h-20 hidden">
<div className='justify-center my-auto md:ml-11 ml-2'>
<img src='https://see.fontimg.com/api/renderfont4/OVoWO/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjNEU1OUI5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGlzdGl0ZG93bg/aloevera.png' alt='listitdown'/>
</div>
<nav className = "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/' >Home</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/showhackathon'>Hackathon</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href=''>Imp Hackathon </a>
     <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/studymaterial'>Study Material</a>
       <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href='/codelist'>Code Library</a>
    </nav>
    <div className=' justify-center my-auto mr-11 '>
       <button className=" md:inline-flex hidden items-center bg-sky-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-md font-semibold mt-4 md:mt-0">Contact Us
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
