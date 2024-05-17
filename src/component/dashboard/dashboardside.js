import React, { useState } from 'react';
import { CiViewList } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import Homedashboard from './homedashboard';
import Displaylist from './displaylist';
import Addlist from './addList';
import Addcode from '../code/addcode';
import Sendmessage from './sendmessage';
import Coderecord from '../code/coderecord';
import Userlist from './userdisplay';
import Prolist from './prolist';
import { useNavigate } from 'react-router-dom';

export default function Dashsidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Optionally, notify the backend to handle any server-side logout logic
      // const response = await fetch('/api/logout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   }
      // });
      // if (!response.ok) {
      //   throw new Error('Logout failed');
      // }

      // Remove the token from localStorage
      localStorage.removeItem('token');
      console.log("success")

      // Optionally, clear all localStorage items (if you have other data stored)
      // localStorage.clear();

      // Redirect to the login page or another appropriate location
      navigate("/adminlogin");
      window.location.reload()
    } catch (error) {
      console.error('Error:', error);
      alert('Logout failed');
    }
  };
  const [fl,setFl]= useState('default');
  console.log('fl', fl)
  return (

    
 
    <div className="flex flex-row">

    <div className='w-fit '>
    <div className='h-screen text-left p-5 flex flex-col bg-sky-400'>
      <div className='bg-slate-500 rounded flex  items-center'>
        <MdDashboard className='w-6 h-6 mx-3 text-white' />
        <h1 className='font-bold text-2xl mx-1 my-4 text-white' onClick={()=>setFl('default')}>Dashboard</h1>
      </div>
      <div className='overflow-y-auto'>
        <div className={fl=='prolist'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('prolist')}>
          <FaListUl className='w-6 h-6 mr-3' />
          <h1 className='truncate' >Project List</h1>
        </div>
        <div className={fl=='hacklist'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('hacklist')}>
          <CiViewList className='w-6 h-6 mr-3' />
          <h1 className='truncate'>Hackathon List</h1>
        </div>
        <div className={fl=='userlist'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('userlist')}>
          <FaUserAstronaut className='w-6 h-6 mr-3' />
          <h1 className='truncate'>User</h1>
        </div>
        
        <div className={fl=='hackadd'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('hackadd')}>
          <MdPlaylistAdd className='w-6 h-6 mr-3' />
          <h1 className='truncate'>Add Hackathon</h1>
        </div>
        <div className={fl=='codeadd'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('codeadd')}>
          <MdFormatListBulletedAdd className='w-6 h-6 mr-3' />
          <h1 className='truncate'>Add Project</h1>
        </div>
        <div className={fl=='sendmess'?'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6 bg-slate-200':'mx-2 flex items-center w-5/6 rounded px-5 py-2 cursor-pointer font-semibold hover:bg-slate-400 my-6'} onClick={()=>setFl('sendmess')}>
          <MdFormatListBulletedAdd className='w-6 h-6 mr-3' />
          <h1 className='truncate'>Send Message</h1>
        </div>

        <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
    >
      Logout
    </button>
      </div>
    </div>
    </div>
    


    <div className='flex-grow my-auto'>
      {fl=='default'?
    <Homedashboard/>: ""}
   
   {fl=='hacklist'?  
    <Displaylist/>:""}

   {/* {fl=='prolist'?  
    <Coderecord/>:""} */}
    
   {fl=='hackadd'?  
    <Addlist/>:""}

   {fl=='codeadd'?  
    <Addcode/>:""}

   {fl=='sendmess'?  
    <Sendmessage/>:""}

   {fl=='userlist'?  
    <Userlist/>:""}

   {fl=='prolist'?  
    <Prolist/>:""}
   {/* {fl=='hackadd'?  
    <h1>list down</h1>:""} */}

   
    </div>


  </div>
  );
}

