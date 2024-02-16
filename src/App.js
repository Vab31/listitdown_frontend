import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './component/Navigation';
import Footer from './component/footer';
import Home from './Home';
import Detail from './component/detailpage';
import ShowHackathon from './component/showHackathon';
import Login from './component/admin/login';
import Homedashboard from './component/dashboard/homedashboard';
import Displaylist from './component/dashboard/displaylist'
import Addlist from './component/dashboard/addList';
import Studymaterial from './component/studymaterial';
import Sendmessage from './component/dashboard/sendmessage';
import Codelist from './component/code/codelist';
import Codepage from './component/code/codepage';
import Addcode from './component/code/addcode';
// import 'flowbite/css/flowbite.min.css';

import './font/style.css'


function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  console.log(isLoggedIn);

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:_id" element={<Detail/>} />
          <Route path="/code/:_id" element={<Codepage/>} />
          <Route path="/showhackathon" element={<ShowHackathon />} />
          <Route path="/studymaterial" element={<Studymaterial />} />
          <Route path='/sendmessage' element={<Sendmessage/>}/>
          <Route path='/codelist' element={<Codelist/>}/>
          {/* <Route path='/codepage' element={<Codepage/>}/> */}
         



          <Route path="/adminlogin" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route path="/dashboardhome" element={<Homedashboard />} />
              <Route path="/list" element={<Displaylist />} />
              <Route path="/additem" element={<Addlist />} />
              <Route path='/addcode' element={<Addcode/>}/>
            </>
          ) : (
            <>
            <Route path="/adminlogin" element={<Login />} />
            <Route path="/list" element={<Login />} />
            <Route path="/dashboardhome" element={<Login />} />
            <Route path="/additem" element={<Login />} />
            </>
            
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
