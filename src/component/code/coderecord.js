
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import loder from '../loder.gif';

import axios from 'axios';
import { addItem, removeItem } from '../../slice/storeSlice.js';

export default function Coderecord() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(7); // Number of items to display initially

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://listitdown-backend.vercel.app/code/display");
        dispatch(addItem(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = (itemId) => {
    axios.delete(`https://listitdown-backend.vercel.app/list/remove/${itemId}`)
      .then(res => {
        dispatch(removeItem(itemId));
      })
      .catch(err => console.log(err));
  };

  const loadMoreItems = () => {
    // Increase the number of displayed items by 7
    setDisplayedItems(prev => prev + 7);
  };

  return (
    <div className="container mx-auto mt-8">
      <Typography variant="h3" align="center" gutterBottom>
        Display List
      </Typography>
      {items.length === 0 ? (
        <div className="flex justify-center">
          <img src={loder} alt="Loader" />
        </div>
      ) : (
        <div>
          {items.slice(0, displayedItems).map((item) => (
            <section key={item._id} className="rounded-lg bg-gray-100 border-2 border-neutral-800 shadow-md mx-2 p-6 mb-4">
              <div className="flex justify-between items-center">
                <Typography variant="h4" className="mb-4 block">{item.title}</Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mx-2"
                    startIcon={<EditIcon />}
                    aria-describedby={id}
                    onClick={(event) => handleClick(event, item)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    className="mx-2"
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
                  {/* Add your text fields for editing */}
                  <Button variant="contained" color="primary" className="mt-2">
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