// import React, { useState , useEffect} from 'react'
// import { useSelector,useDispatch } from 'react-redux'; 
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import { addItem, removeItem } from '../../slice/storeSlice.js';


// export default function Displaylist() {
 

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  
//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;
    
//     // {
//     //   id:0,
//     //   title: "Google Hackathon",
//     //   prize: "$1200",
//     //   mode:"online",
//     //   about: "Lorem the good man is shere and am really proud of him so lets go and discuss about he the importance of what we are going",
//     //   link:"https://www.google.com",
//     //   eligibility:"CSE Student",
//     //   image:"https://blog.hubspot.com/hubfs/image8-2.jpg",
//     //   label:"#cse #online",
//     //   important:"false",
//     //   ldate:"12-12-2023",
//     //       }

//     const dispatch = useDispatch();
//     const [_id, setData] = useState("");
//     let val = useSelector((state) => state.data.items);
    
//     async function datafetch() {
//       if (val=[])
//       {
//       try {
//         const response = await axios.get("http://listitdown-backend.vercel.app/list/display");
//         dispatch(addItem(response.data));
//         // setData(response.data); 
//         // Move this line after dispatch
//         console.log('data',response.data);
//       } catch (error) {
//         console.error('Error sending data:', error);
//       }
//     }
//     }

//     useEffect(() => {
//       console.log("inside-");
//       datafetch();
//     }, []);

//     val = useSelector((state) => state.data.items);
  
//  console.log('val', val)

//  const handleDelete = () => {
//  console.log('data', _id);
//   axios.delete(`https://listitdown-backend.vercel.app/list/remove/${_id}`)
//     .then(res => {
//       console.log(res.data); // Log the response from the server
//       // Update the state to remove the deleted item
//      let hi= val.filter(item => item._id !== _id);
//      dispatch(addItem(hi));
//      console.log('hi.length', hi.length)
//     })
//     .catch(err => console.log(err));
// };

//   return (
//     <div>
//     <div className='text-center font-bold text-3xl mt-3 mb-9'>   Display List</div>
//     {
//     val.map((val)=>(
//     <section class="text-gray-600 md:m-2 md:ml-4 md:mr-4  m-2 rounded body-font bg-gray-400">
//   <div class="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
//     <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
     
//     <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">{val.title}</h1>
//     </div>
//     <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
//     <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" aria-describedby={id} variant="contained" onClick={handleClick}>Update</button>
//     <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//     vertical: 'top',
//     horizontal: 'center',
//   }}
//   transformOrigin={{
//     vertical: 'top',
//     horizontal: 'center',
//   }}

//       >
//         <Typography sx={{ p: 2 ,textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
//         <TextField
//           label="Title"
//           id="filled-size-normal"
//           defaultValue= {val.title}
  
//           variant="filled"
//           style={{"margin":"2px"}}
//         />
        
//         <TextField
//           label="Prize"
//           id="filled-size-normal"
//           defaultValue={val.prize}
//           variant="filled"

//            style={{"margin":"2px"}}
//         />
//         <br/>
//         <TextField
//           label="Mode"
//           id="filled-size-normal"
//           defaultValue={val.mode}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
       
//         <TextField
//   label="About"
//   id="filled-size-normal"
//   defaultValue={val.about}
//   variant="filled"
//   // style={{  height: '200px' }}
//    style={{"margin":"2px"}}
// />
// <br/>
// <TextField
//           label="Link"
//           id="filled-size-normal"
//           defaultValue={val.link}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
       
// <TextField
//           label=" Eligibility"
//           id="filled-size-normal"
//           defaultValue={val.eligibility}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
//         <br/>
// <TextField
//           label="Image"
//           id="filled-size-normal"
//           defaultValue={val.image}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
       
// <TextField
//           label="Label"
//           id="filled-size-normal"
//           defaultValue={val.label}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
//          <br/>
// <TextField
//           label="Important"
//           id="filled-size-normal"
//           defaultValue={val.important}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />
// <TextField
//           label="Last Date"
//           id="filled-size-normal"
//           defaultValue={val.ldate}
//           variant="filled"
//            style={{"margin":"2px"}}
//         />

// <br/>

        
// <button type="submit" style={{"margin":"2px"}} className=' text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0' >Submit</button>
//         </Typography>

//       </Popover>
//       <button
//   className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
//   onClick={() => {
//     setData(val._id);
//     handleDelete(); // Call another function after setting data
//   }}
// >
//   Delete
// </button>

  
//     </div>
    
//   </div>
// </section>
//     )) } 
    
    
//     </div>
//   )
// }



// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { addItem, removeItem } from '../../slice/storeSlice.js';

// export default function Displaylist() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleClick = (event, item) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedItem(item);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setSelectedItem(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.data.items);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://listitdown-backend.vercel.app/list/display");
//         dispatch(addItem(response.data));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   const handleDelete = (itemId) => {
//     axios.delete(`https://listitdown-backend.vercel.app/list/remove/${itemId}`)
//       .then(res => {
//         dispatch(removeItem(itemId));
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <Typography variant="h3" align="center" gutterBottom>
//         Display List
//       </Typography>
//       {items.map((item) => (
//         <section key={item._id} className="rounded-lg bg-gray-100 p-6 mb-4">
//           <Typography variant="h4" className="mb-4">{item.title}</Typography>
//           <div className="flex justify-between items-center">
//             <div>
//               <Typography variant="body1" className="mb-2">Prize: {item.prize}</Typography>
//               <Typography variant="body1" className="mb-2">Mode: {item.mode}</Typography>
//               <Typography variant="body1" className="mb-2">About: {item.about}</Typography>
//             </div>
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="mr-4"
//                 aria-describedby={id}
//                 onClick={(event) => handleClick(event, item)}
//               >
//                 Update
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleDelete(item._id)}
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//           <Popover
//             id={id}
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'center',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'center',
//             }}
//           >
//             <Typography sx={{ p: 2 }}>
//               <TextField
//                 label="Title"
//                 defaultValue={selectedItem?.title}
//                 variant="outlined"
//                 fullWidth
//                 className="mb-2"
//               />
//               <TextField
//                 label="Prize"
//                 defaultValue={selectedItem?.prize}
//                 variant="outlined"
//                 fullWidth
//                 className="mb-2"
//               />
//               <TextField
//                 label="Mode"
//                 defaultValue={selectedItem?.mode}
//                 variant="outlined"
//                 fullWidth
//                 className="mb-2"
//               />
//               <TextField
//                 label="About"
//                 defaultValue={selectedItem?.about}
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 className="mb-2"
//               />
//               <Button variant="contained" color="primary" className="mt-2">
//                 Submit
//               </Button>
//             </Typography>
//           </Popover>
//         </section>
//       ))}
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import loder from '../loder.gif'

// import axios from 'axios';
// import { addItem, removeItem } from '../../slice/storeSlice.js';

// export default function DisplayList() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [displayedItems, setDisplayedItems] = useState(7);
//   const [itemsr, setItems] = useState([]);


//   const [formData, setFormData] = useState({
//     title: '',
//     prize: '',
//     mode:'',
//     about: '',
//     link:'',
//     eligibility:'',
//     image:'',
//     label:'',
//     important:'',
//     ldate:'',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };


//   const handleClick = (event, item) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedItem(item);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setSelectedItem(null);
//   };

//   const handleUpdate = async () => {
//     try {
//         console.log(formData)
//       const updatedItem = await axios.put(`http://localhost:3002/list/update/${selectedItem._id}`, formData);
//       setItems(items.map((item) => (item._id === selectedItem._id ? updatedItem.data : item)));
//       handleClose();
//     } catch (error) {
//       console.log('Error updating item:', error);
//     }
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.data.items);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://listitdown-backend.vercel.app/list/display");
//         dispatch(addItem(response.data));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   const handleDelete = (itemId) => {
//     axios.delete(`https://listitdown-backend.vercel.app/list/remove/${itemId}`)
//       .then( res => {
//         let id=itemId
//         dispatch(removeItem(id));
//         })
//       .catch(err => console.log(err));
      
//   };

//   const loadMoreItems = () => {
//     // Increase the number of displayed items by 7
//     setDisplayedItems(prev => prev + 7);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <Typography variant="h3" align="center" gutterBottom>
//         Display List
//       </Typography>
//       {items.length === 0 ? (
//           <div className="flex justify-center">
//             <img src={loder} alt="Loader" />
//           </div>
//         ) : (
//           <div>
//             {items.slice(0, displayedItems).map((item) => (
//               <section key={item._id} className="rounded-lg bg-gray-100 border-2 border-neutral-800 shadow-md mx-2 p-6 mb-4">
//                 <div className="flex justify-between items-center ">
//                   <Typography variant="h4" className="mb-4 block">{item.title}</Typography>
//                   <div>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="mr-4"
//                       startIcon={<EditIcon />}
//                       aria-describedby={id}
//                       onClick={(event) => handleClick(event, item)}
//                     >
//                       Update
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       startIcon={<DeleteIcon />}
//                       onClick={() => handleDelete(item._id)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//                 <Popover
//                   id={id}
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClose={handleClose}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                   }}
//                 >
//                      {/* title: String,
//       prize: String,
//       mode:String,
//       about: String,
//       link:String,
//       eligibility:String,
//       image:String,
//       label:String,
//       important:String,
//       ldate:String, */}

                  
//                 </Popover>
//               </section>
//             ))}
//             {displayedItems < items.length && (
//               <div className="flex justify-center my-4">
//                 <Button variant="contained" color="primary" onClick={loadMoreItems}>
//                   Load More
//                 </Button>
//               </div>
//             )}
//           </div>
//         )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import loder from '../loder.gif';

export default function Prolist() {
  const [items, setItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(7); // Number of items to display initially
  const [formData, setFormData] = useState({
    title: '',
    prize: '',
    mode:'',
    about: '',
    link:'',
    eligibility:'',
    image:'',
    label:'',
    important:'',
    ldate:'',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://listitdown-backend.vercel.app/list/display");
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
    setFormData({
      title: item.title,
      prize: item.prize,
      mode: item.mode,
      about: item.about,
      link: item.link,
      eligibility: item.eligibility,
      image: item.image,
      label: item.label,
      important: item.important,
      ldate: item.ldate,
     
  });
  }
  // title: String,
  // prize: String,
  // mode:String,
  // about: String,
  // link:String,
  // eligibility:String,
  // image:String,
  // label:String,
  // important:String,
  // ldate:String,

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://listitdown-backend.vercel.app/list/remove/${itemId}`);
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const handleUpdate = async () => {
    try {
        console.log(formData)
      const updatedItem = await axios.put(`https://listitdown-backend.vercel.app/list/update/${selectedItem._id}`, formData);
      setItems(items.map((item) => (item._id === selectedItem._id ? updatedItem.data : item)));
      handleClose();
    } catch (error) {
      console.log('Error updating item:', error);
    }
  };

  const loadMoreItems = () => {
    setDisplayedItems((prev) => prev + 7);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="container mx-auto mt-8">
      <Typography variant="h3" align="center" gutterBottom>
        Project List
      </Typography>
      {items.length === 0 ? (
        <div className="flex justify-center">
          <img src={loder} alt="Loader" />
        </div>
      ) : (
        <div>
          {items.slice(0, displayedItems).map((item) => (
            <section key={item._id} className="rounded-lg bg-gray-100 border-2 border-neutral-800 shadow-md mx-2 p-6 mb-4">
              <div className="flex justify-between items-center ">
                <Typography variant="h4" className="mb-4 block">{item.title}</Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mr-4"
                    startIcon={<EditIcon />}
                    aria-describedby={id}
                    onClick={(event) => handleClick(event, item)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
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
              <div className="p-4">
                    <Typography variant="h6" gutterBottom>
                      Edit Item
                    </Typography>
                    <TextField
                      label="Title"
                      defaultValue={selectedItem?.title}
                      variant="outlined"
                      name="title"
                      onChange={handleChange}
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Prize"
                      defaultValue={selectedItem?.prize}
                      variant="outlined"
                      name="prize"
                      onChange={handleChange}
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Mode"
                      defaultValue={selectedItem?.mode}
                      variant="outlined"
                      name="mode"
                      onChange={handleChange}
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="About"
                      defaultValue={selectedItem?.about}
                      variant="outlined"
                      name="about"
                      onChange={handleChange}
                      multiline
                      rows={4}
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Link"
                      defaultValue={selectedItem?.link}
                      variant="outlined"
                      onChange={handleChange}
                      name="link"
                      multiline
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Eligibility"
                      defaultValue={selectedItem?.eligibility}
                      variant="outlined"
                      onChange={handleChange}
                      name="eligibility"
                      multiline
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Image"
                      defaultValue={selectedItem?.image}
                      variant="outlined"
                      onChange={handleChange}
                      name="image"
                      multiline
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Label"
                      defaultValue={selectedItem?.label}
                      variant="outlined"
                      onChange={handleChange}
                      name="label"
                      multiline
                      rows={4}
                      fullWidth
                      className="mb-2"
                    />
                    <TextField
                      label="Last date"
                      defaultValue={selectedItem?.ldate}
                      variant="outlined"
                      name="ldate"
                      onChange={handleChange}
                      multiline
                      fullWidth
                      className="mb-2"
                    />
                    <Button variant="contained" color="primary" className="mt-2" onClick={handleUpdate}>
                      Submit
                    </Button>
                  </div>
              </Popover>
            </section>
          ))}
          {displayedItems < items.length && (
            <div className="flex justify-center my-4">
              <Button variant="contained" color="primary" onClick={loadMoreItems}>
                Load More
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
