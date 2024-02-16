import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';

export default function Addlist() {
  const [formData, setFormData] = useState({
    title: '',
    prize: '',
    mode: '',
    about: '',
    link: '',
    eligibility: '',
    image: '',
    label: '',
    important: '',
    lastDate: '',
  });

  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async() => {
    // Use formData object for further processing or submission
    console.log(formData);
    // Add logic here to send the data to your backend or perform other actions
    try{
      const response = await axios.post("https://listitdown-backend.vercel.app/list/add",formData);
      // const response = await axios.post("https://listitdown-backend.vercel.app/list/add",formData);
      console.log('response', response)
     
     } catch(error){
        console.error('Error sending data:', error);
      }
  
  }
  
  return (



    
    <div><Typography sx={{ p: 2 ,textAlign: 'center', alignItems: 'center'}}>
        
        {/* title: "Google Hackathon",
      prize: "$1200",
      mode:"online",
      about: "Lorem the good man is shere and am really proud of him so lets go and discuss about he the importance of what we are going",
      link:"https://www.google.com",
      eligibility:"CSE Student",
      image:"https://blog.hubspot.com/hubfs/image8-2.jpg",
      label:"#cse #online",
      important:"false",
      ldate:"12-12-2023", */}
    <TextField
      label="Title"
      id="filled-size-normal"
      name="title"
          value={formData.title}
          onChange={handleInputChange}

      variant="filled"
      style={{"margin":"2px"}}
    />
    
    <TextField
      label="Prize"
      id="filled-size-normal"
      name="prize"
          value={formData.prize}
          onChange={handleInputChange}
      variant="filled"

       style={{"margin":"2px"}}
    />
    <br/>
    <TextField
      label="Mode"
      id="filled-size-normal"
      name="mode"
          value={formData.mode}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />
   
    <TextField
label="About"
id="filled-size-normal"
name="about"
          value={formData.about}
          onChange={handleInputChange}
variant="filled"
// style={{  height: '200px' }}
style={{"margin":"2px"}}
/>
<br/>
<TextField
      label="Link"
      id="filled-size-normal"

 name="link"
          value={formData.link}
          onChange={handleInputChange}

      variant="filled"

       style={{"margin":"2px"}}
    />
   
<TextField
      label=" Eligibility"
      id="filled-size-normal"
      name="eligibility"
          value={formData.eligibility}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />
    <br/>
<TextField
      label="Image"
      id="filled-size-normal"
      name="image"
          value={formData.image}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />
   
<TextField
      label="Label"
      id="filled-size-normal"
      name="label"
          value={formData.label}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />
     <br/>
<TextField
      label="Important"
      id="filled-size-normal"
      name="important"
          value={formData.important}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />
<TextField
      label="Last Date"
      id="filled-size-normal"
      name="ldate"
          value={formData.ldate}
          onChange={handleInputChange}
      variant="filled"
       style={{"margin":"2px"}}
    />

<br/>

    
<button type="submit" style={{"margin":"2px"}}  onClick={handleSubmit} className=' text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0' >Submit</button>
    </Typography></div>
  )
}
