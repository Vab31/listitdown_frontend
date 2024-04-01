import React from 'react'
import img from './img.jpg'
import { useState } from 'react';
import axios from 'axios';

export default function Sendmessage() {
    const [formData, setFormData] = useState({
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
        console.log(formData.message);
        let message={
          "message":formData.message,
        }
        // Add logic here to send the data to your backend or perform other actions
        try{
          const response = await axios.post("https://listitdown-backend.vercel.app/email/sendmessage",formData);
          // const response = await axios.post("http://localhost:3002/email/sendmessage",message);
          window.alert("Your message is successfully submitted");
          console.log('response', response)
         
         } catch(error){
            console.error('Error sending data:', error);
          }
    
    
      };
  return (
    <div> 
       
  <div className="container px-5 py-24  text-gray-600  flex flex-wrap items-center justify-center">
    <div className="lg:w-2/5 md:w-1/2 md:pr-16  lg:pr-0 pr-0">
        <img className='rounded-full boder-4  shadow-2xl border-black ' src={img} alt='login page'/>
        </div>
    <div className="lg:w-2/6 md:w-1/2 border-black-500 boder-4 shadow-2xl bg-blue-400 rounded-lg p-8 flex flex-col mx-7 w-full mt-10 md:mt-0">
      <h2 className="text-black  text-lg font-medium title-font mb-5">Message Box</h2>
      
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4} // specify the number of visible rows
          cols={50} // specify the number of visible columns
        />
     
      <button onClick={handleSubmit} className="text-white mt-4 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
      
    </div>
  </div>

    </div>
  )
}
