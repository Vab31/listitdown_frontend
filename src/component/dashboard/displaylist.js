import React, { useState , useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'; 
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { addItem, removeItem } from '../../slice/storeSlice.js';


export default function Displaylist() {
 

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    // {
    //   id:0,
    //   title: "Google Hackathon",
    //   prize: "$1200",
    //   mode:"online",
    //   about: "Lorem the good man is shere and am really proud of him so lets go and discuss about he the importance of what we are going",
    //   link:"https://www.google.com",
    //   eligibility:"CSE Student",
    //   image:"https://blog.hubspot.com/hubfs/image8-2.jpg",
    //   label:"#cse #online",
    //   important:"false",
    //   ldate:"12-12-2023",
    //       }

    const dispatch = useDispatch();
    const [_id, setData] = useState("");
    let val = useSelector((state) => state.data.items);
    
    async function datafetch() {
      if (val=[])
      {
      try {
        const response = await axios.get("http://listitdown-backend.vercel.app/list/display");
        dispatch(addItem(response.data));
        // setData(response.data); 
        // Move this line after dispatch
        console.log('data',response.data);
      } catch (error) {
        console.error('Error sending data:', error);
      }
    }
    }

    useEffect(() => {
      console.log("inside-");
      datafetch();
    }, []);

    val = useSelector((state) => state.data.items);
  
 console.log('val', val)

 const handleDelete = () => {
 console.log('data', _id);
  axios.delete(`https://listitdown-backend.vercel.app/list/remove/${_id}`)
    .then(res => {
      console.log(res.data); // Log the response from the server
      // Update the state to remove the deleted item
     let hi= val.filter(item => item._id !== _id);
     dispatch(addItem(hi));
     console.log('hi.length', hi.length)
    })
    .catch(err => console.log(err));
};

  return (
    <div>
    <div className='text-center font-bold text-3xl mt-3 mb-9'>   Display List</div>
    {
    val.map((val)=>(
    <section class="text-gray-600 md:m-2 md:ml-4 md:mr-4  m-2 rounded body-font bg-gray-400">
  <div class="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
     
    <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">{val._id}</h1>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
    <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" aria-describedby={id} variant="contained" onClick={handleClick}>Update</button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}

      >
        <Typography sx={{ p: 2 ,textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
        <TextField
          label="Title"
          id="filled-size-normal"
          defaultValue= {val.title}
  
          variant="filled"
          style={{"margin":"2px"}}
        />
        
        <TextField
          label="Prize"
          id="filled-size-normal"
          defaultValue={val.prize}
          variant="filled"

           style={{"margin":"2px"}}
        />
        <br/>
        <TextField
          label="Mode"
          id="filled-size-normal"
          defaultValue={val.mode}
          variant="filled"
           style={{"margin":"2px"}}
        />
       
        <TextField
  label="About"
  id="filled-size-normal"
  defaultValue={val.about}
  variant="filled"
  // style={{  height: '200px' }}
   style={{"margin":"2px"}}
/>
<br/>
<TextField
          label="Link"
          id="filled-size-normal"
          defaultValue={val.link}
          variant="filled"
           style={{"margin":"2px"}}
        />
       
<TextField
          label=" Eligibility"
          id="filled-size-normal"
          defaultValue={val.eligibility}
          variant="filled"
           style={{"margin":"2px"}}
        />
        <br/>
<TextField
          label="Image"
          id="filled-size-normal"
          defaultValue={val.image}
          variant="filled"
           style={{"margin":"2px"}}
        />
       
<TextField
          label="Label"
          id="filled-size-normal"
          defaultValue={val.label}
          variant="filled"
           style={{"margin":"2px"}}
        />
         <br/>
<TextField
          label="Important"
          id="filled-size-normal"
          defaultValue={val.important}
          variant="filled"
           style={{"margin":"2px"}}
        />
<TextField
          label="Last Date"
          id="filled-size-normal"
          defaultValue={val.ldate}
          variant="filled"
           style={{"margin":"2px"}}
        />

<br/>

        
<button type="submit" style={{"margin":"2px"}} className=' text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0' >Submit</button>
        </Typography>

      </Popover>
      <button
  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
  onClick={() => {
    setData(val._id);
    handleDelete(); // Call another function after setting data
  }}
>
  Delete
</button>

  
    </div>
    
  </div>
</section>
    )) } 
    
    
    </div>
  )
}
