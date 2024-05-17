import React from 'react';
import count from '../../image/edit.png';
import Dashsidebar from './dashboardside';
import img from './image.png';
import pep from './people (3).png'
import pro from './project-management.png'

export default function Homedashboard({props}) {
  return (
   
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Stats of the ListitDown</h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full ">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className='w-16 h-20 mx-auto' src={img}/>

                <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p class="leading-relaxed">Hackathon</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img className='w-20 h-20 mx-auto' src={pep}/>
                <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <img className='w-20 h-20 mx-auto' src={pro}/>

                <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                <p class="leading-relaxed">Files</p>
              </div>
            </div>
        
          </div>
        </div>
      </section>
   
  );
}
