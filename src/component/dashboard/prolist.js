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

// export default function Prolist() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [displayedItems, setDisplayedItems] = useState(7);
//   const [updatedItem, setUpdatedItem] = useState({});


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
//         const response = await axios.get("http://listitdown-backend.vercel.app/code/display");
//         dispatch(addItem(response.data));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   const handleDelete = (itemId) => {
//     axios.delete(`https://listitdown-backend.vercel.app/code/remove/${itemId}`)
//     // axios.delete(`http://localhost:3002/code/remove/${itemId}`)
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

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedItem(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
//   const handleUpdate = (id) => {
//     console.log(updatedItem)
//     axios.put(`http://localhost:3002/code/update/${id}`, updatedItem)
//       .then(res => {
//         // dispatch(updateItem(updatedItem));
//         handleClose();
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <Typography variant="h3" align="center" gutterBottom>
//         Project List
//       </Typography>
//       {items.length === 0 ? (
//           <div className="flex justify-center">
//             <img src={loder} alt="Loader" />
//           </div>
//         ) : (
//           <div>
//             {items.slice(0, displayedItems).map((item) => (
//                <section key={item._id} className="rounded-lg bg-gray-100 border-2 border-neutral-800 shadow-md mx-2 p-6 mb-4">
//                <div className="flex justify-between items-center ">
//                  <Typography variant="h4" className="mb-4 block">{item.title}</Typography>
//                  <div>
//                    <Button
//                      variant="contained"
//                      color="primary"
//                      className="mr-4"
//                      startIcon={<EditIcon />}
//                      aria-describedby={id}
//                      onClick={(event) => handleClick(event, item)}
//                    >
//                      Update
//                    </Button>
//                    <Button
//                      variant="contained"
//                      color="secondary"
//                      startIcon={<DeleteIcon />}
//                      onClick={() => handleDelete(item._id)}
//                    >
//                      Delete
//                    </Button>
//                  </div>
//                </div>
//                <Popover
//                  id={id}
//                  open={open}
//                  anchorEl={anchorEl}
//                  onClose={handleClose}
//                  anchorOrigin={{
//                    vertical: 'top',
//                    horizontal: 'center',
//                  }}
//                  transformOrigin={{
//                    vertical: 'top',
//                    horizontal: 'center',
//                  }}
//                >
//                  <div className="p-4">
//                    <Typography variant="h6" gutterBottom>
//                      Edit Item
//                    </Typography>
//                    <TextField
//                      label="Title"
//                      name="title"
//                       defaultValue={item.title || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="About"
//                      name="about"
//                      defaultValue={item.about || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="Image"
//                      name="image"
//                       defaultValue={item.image || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="Html"
//                      name="html"
//                      value={item.html || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      multiline
//                      rows={4}
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="CSS"
//                      name="css"
//                       defaultValue={item.css || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      multiline
//                      rows={4}
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="JS"
//                      name="js"
//                       defaultValue={item.js || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      multiline
//                      rows={4}
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="Link"
//                      name="link"
//                       defaultValue={item.link || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <TextField
//                      label="Label"
//                      name="label"
//                       defaultValue={item.label || ''}
//                      onChange={handleInputChange}
//                      variant="outlined"
//                      fullWidth
//                      className="mb-2"
//                    />
//                    <Button
//                      variant="contained"
//                      color="primary"
//                      className="mt-2"
//                     //  onClick={handleUpdate}
//                      onClick={() => handleUpdate(item._id)}
//                    >
//                      Submit
//                    </Button>
//                  </div>
//                </Popover>
//              </section>
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
    about: '',
    image: '',
    html: '',
    css: '',
    js: '',
    link: '',
    label: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://listitdown-backend.vercel.app/code/display");
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
      about: item.about,
      image: item.image,
      html: item.html,
      css: item.css,
      js: item.js,
      link: item.link,
      label: item.label
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://listitdown-backend.vercel.app/code/remove/${itemId}`);
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const handleUpdate = async () => {
    try {
        console.log(formData)
      const updatedItem = await axios.put(`https://listitdown-backend.vercel.app/code/update/${selectedItem._id}`, formData);
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="About"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="Image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="Html"
                    name="html"
                    value={formData.html}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="CSS"
                    name="css"
                    value={formData.css}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="JS"
                    name="js"
                    value={formData.js}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="Link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    fullWidth
                    className="mb-2"
                  />
                  <TextField
                    label="Label"
                    name="label"
                    value={formData.label}
                    onChange={handleChange}
                    variant="outlined"
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
