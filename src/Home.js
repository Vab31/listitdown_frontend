import React from 'react';
import Important from './component/Important';
import UpcomingHackathon from './component/hackathon';
import Hero from './component/hero';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../src/slice/storeSlice.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  async function datafetch() {
    try {
      const response = await axios.get("http://localhost:3002/list/display");
      dispatch(addItem(response.data));
      setData(response.data); 
      // Move this line after dispatch
      console.log('data', data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }

  useEffect(() => {
    console.log("inside-");
    datafetch();
  }, []);

  const val = useSelector((state) => state.data.items);

  // useEffect(() => {
  //   // setData(val); // Remove this line
  //   // window.location.reload();
  //   console.log('data', data); // Use 'val' directly
  // }, [val]);
  

  return (
    <div>
    {/* <p>{val[0].title}</p> */}
      <Hero />
       <Important val={val} />
     <UpcomingHackathon val={val} />
    </div>
  );
}

