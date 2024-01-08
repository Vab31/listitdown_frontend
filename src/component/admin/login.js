import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Login() {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
const navigate = useNavigate();
const handleEmail = e =>{

setEmail(e.target.value);


}
const handlePassword = e =>{

setPassword(e.target.value);


}


// const sendData = async () => {
//   try {
//     const response = await axios.post('http://localhost:3001/api/endpoint', data);
//     console.log('Response from server:', response.data);
//   } catch (error) {
//     console.error('Error sending data:', error);
//   }
// };

const logincheck= async()=>{
  try{
    const response = await axios.post("http://localhost:3002/user/login",{email,password})
    console.log('Response from server:',response.data.token);
    localStorage.setItem('token', response.data.token);
    // window.location.reload();
    navigate("/dashboardhome")}
    catch(error){
      console.error('Error sending data:', error);
    }

}

  return (
    

    
    <section className="text-gray-600 body-font md:mt-10  ">
  <div className="container px-5 py-24 mx-auto flex flex-wrap bg-gray-300 items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
      <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-400 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 font-bold text-2xl title-font mb-5">Login</h2>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="text" id="email" value={email} onChange={handleEmail} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" value={password} onChange={handlePassword} name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none  hover:bg-indigo-600 rounded text-lg" onClick={logincheck}>Login</button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>
    
  )
}
