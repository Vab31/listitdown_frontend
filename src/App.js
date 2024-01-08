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
          <Route path="/detail" element={<Detail />} />
          <Route path="/showhackathon" element={<ShowHackathon />} />
          <Route path="/adminlogin" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route path="/dashboardhome" element={<Homedashboard />} />
              <Route path="/list" element={<Displaylist />} />
              <Route path="/additem" element={<Addlist />} />
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
