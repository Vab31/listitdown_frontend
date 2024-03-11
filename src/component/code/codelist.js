import React from 'react'
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
// import { addItem } from '../slice/hackathonidSlice';
import axios from 'axios';
import adimg from '../../image/courseimg.png'
import {Link} from 'react-router-dom';
import loder from '../loder.gif'

export default function Codelist() {
  const [value,setValue]=useState(null);
  const [res, setRes]=useState(true)
    let val = useSelector((state)=>state.data.items)
  async function datafetch(){

    if(val){
    setValue(val);
    console.log("inside if")
    }else
    console.log("inside else")
          
      
          try{

            const response = await axios.get("https://listitdown-backend.vercel.app/code/display")

            // const response = await axios.get("http://localhost:3002/code/display")
            console.log('Response from server:',response.data);
            setValue(response.data);
            // dispatch(addItem(response.data));
          
          }
            catch(error){
              console.error('Error sending data:', error);
            }
        }
      
        useEffect( () => {
          setTimeout(async() => {
            
            await datafetch();
            setRes(false)
          }, 1000);
      
        }, [])
        const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://listitdown-backend.vercel.app/code/search?q=${query}`);
       setResults(response.data);
       console.log('results', results)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <a href='https://ebook.rccodex.co.in/'>
            <img className='rounded shadow-2xl shadow-black' src={adimg} alt="Advertisement"/>
          </a>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-8 text-gray-900">Project Code Library</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          <div className="flex justify-center items-center ">
  <input
    type="text"
    value={query}
    onChange={e => setQuery(e.target.value)}
    placeholder="Search..."
    className="mr-2 px-2  py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  />
  <button
    onClick={handleSearch}
    className="px-4 py-2 bg-blue-500  text-white rounded-md hover:bg-blue-600 focus:outline-none"
  >
    Search
  </button>
</div>


        </div>
        {results.length!=0 ?  <h1>Results we got...</h1>:""}
        <div className="flex flex-wrap -m-2"> 
            {results.length!=0 && results.map((val) => (
              <div key={val._id} className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div className="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-1" src={val.image}/>
                  <div className="flex-grow">
                    <Link to={`/code/${val._id}`} >
                      <h2 className="text-gray-900 title-font  font-semibold">{val.title}</h2>
                      <p className="text-blue-500">{val.label}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <br/>
          </div>
          {results.length!=0 ? <h1 className='mx-auto font-semibold text-2xl mt-4'>All Codelist</h1>:""}

        {res ? (
          <div className="flex  justify-center ">
            <img src={loder} alt="Loader" />
          </div>
        ) : (
          <div className= {results?"flex flex-wrap mt-8":"flex flex-wrap -m-2"}> 
            {value && value.map((val) => (
              <div key={val._id} className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div className="h-full flex items-center bg-white border-gray-200 shadow-xl border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-1" src={val.image}/>
                  <div className="flex-grow">
                    <Link to={`/code/${val._id}`} >
                      <h2 className="text-gray-900 title-font  font-semibold">{val.title}</h2>
                      <p className="text-blue-500">{val.label}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  </div>


  )
}
