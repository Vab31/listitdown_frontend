// import React from 'react'
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import { useState } from 'react';
// // import axios from 'axios';
// import {useSelector,useDispatch} from 'react-redux';
// // import { addItem } from '../slice/hackathonidSlice';
// import axios from 'axios';

// export default function Addcode() {
//   const [formData, setFormData] = useState({
//     title: "",
//     about: "",
//     image:"",
//     html:"",
//     css:"",
//     js:"",
//     link:"",
//     label:""
//   });

//   // Function to handle changes in the input fields
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = async() => {
//     // Use formData object for further processing or submission
//     console.log(formData);
//     // Add logic here to send the data to your backend or perform other actions
//     try{
//       // const response = await axios.post("http://localhost:3002/code/add",formData);
//       // const response = await axios.post("https://listitdown-backend.vercel.app/code/add",formData);
//       // console.log('response', response)
     
//      } catch(error){
//         console.error('Error sending data:', error);
//       }
  
//   }
  
//   return (



    
//     <div>
//       <h1 className='font-semibold m-2 text-xl'>Code Add</h1>
      
      
//       <Typography sx={{ p: 2 ,textAlign: 'center', alignItems: 'center'}}>
        
//         {/* title: "Google Hackathon",
//       prize: "$1200",
//       mode:"online",
//       about: "Lorem the good man is shere and am really proud of him so lets go and discuss about he the importance of what we are going",
//       link:"https://www.google.com",
//       eligibility:"CSE Student",
//       image:"https://blog.hubspot.com/hubfs/image8-2.jpg",
//       label:"#cse #online",
//       important:"false",
//       ldate:"12-12-2023", */}
//     <TextField
//       label="Title"
//       id="filled-size-normal"
//       name="title"
//           value={formData.title}
//           onChange={handleInputChange}

//       variant="filled"
//       style={{"margin":"2px"}}
//     />
    
//     <TextField
//       label="About"
//       id="filled-size-normal"
//       name="about"
//           value={formData.about}
//           onChange={handleInputChange}
//       variant="filled"

//        style={{"margin":"2px"}}
//     />
//     <br/>
//     <TextField
//       label="Image"
//       id="filled-size-normal"
//       name="image"
//           value={formData.image}
//           onChange={handleInputChange}
//       variant="filled"
//        style={{"margin":"2px"}}
//     />
   
  
// <textarea placeholder="Html"
// id="filled-size-normal"
// name="html"
//           value={formData.html}
//           onChange={handleInputChange}
// variant="filled" rows="1" cols="15" className='m-2' />
// <br/>
// {/* <TextField
     

//        style={{"margin":"2px"}}
//     /> */}
//     <textarea  placeholder="CSS"
//       id="filled-size-normal"

//  name="css"
//           value={formData.css}
//           onChange={handleInputChange}

//       variant="filled" rows="1" cols="15" className='m-2' />
      
   
// {/* <TextField
//       label="Js"
//       id="filled-size-normal"
//       name="js"
//           value={formData.js}
//           onChange={handleInputChange}
//       variant="filled"
//        style={{"margin":"2px"}}
//     /> */}
//     <textarea placeholder="Js"
//       id="filled-size-normal"
//       name="js"
//           value={formData.js}
//           onChange={handleInputChange}
//       variant="filled" rows="1" cols="15" className='m-2' />
//     <br/>
// <TextField
//       label="Link"
//       id="filled-size-normal"
//       name="link"
//           value={formData.link}
//           onChange={handleInputChange}
//       variant="filled"
//        style={{"margin":"2px"}}
//     />
   
// <TextField
//       label="Label"
//       id="filled-size-normal"
//       name="label"
//           value={formData.label}
//           onChange={handleInputChange}
//       variant="filled"
//        style={{"margin":"2px"}}
//     />
//      <br/>


// <br/>

    
// <button type="submit" style={{"margin":"2px"}}  onClick={handleSubmit} className=' text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0' >Submit</button>
//     </Typography></div>
//   )
// }



import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import axios from 'axios';

export default function Addcode() {
  const [formData, setFormData] = useState({
    title: '',
    about: '',
    image: '',
    html: '',
    css: '',
    js: '',
    link: '',
    label: '',
  });

  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
    // Perform form submission logic here
    console.log(formData);
    // Simulate a successful submission

    try{
      const response = await axios.post("https://listitdown-backend.vercel.app/code/add",formData);
      console.log('response', response)
      setOpen(true);
      setFormData({
        title: '',
        about: '',
        image: '',
        html: '',
        css: '',
        js: '',
        link: '',
        label: '',
      });
     
     } catch(error){
        console.error('Error sending data:', error);
      }
  
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f4f8' }}>
      <div style={{ maxWidth: '600px', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', background: 'white' }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
          Code Add
        </Typography>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="About"
          name="about"
          value={formData.about}
          onChange={handleInputChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="HTML"
          name="html"
          value={formData.html}
          onChange={handleInputChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="CSS"
          name="css"
          value={formData.css}
          onChange={handleInputChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="JS"
          name="js"
          value={formData.js}
          onChange={handleInputChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Link"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Label"
          name="label"
          value={formData.label}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '20px', width: '100%' }}
        >
          Submit
        </Button>
        <Popover
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Data saved successfully!</Typography>
        </Popover>
      </div>
    </div>
  );
}

