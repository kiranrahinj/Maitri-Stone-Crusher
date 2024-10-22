import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';

const Navbar = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const disptach=useDispatch();
  const navigate=useNavigate()

  const handleLogout=()=>{
   try{
    disptach(logout());
    navigate("/");
   }catch(error){
    console.log(error);
    
   }
  }
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo or Site Title */}
        <div className="text-2xl font-extrabold hover:text-gray-300 transition">
          <Link to="/dashboard">Maitri Stone Crusher</Link>
        </div>

        {
          isLoggedIn? 
          
            <button onClick={handleLogout} className="text-lg font-semibold hover:text-gray-300 transition">
              Logout
            </button>
          
          :
          <div> 
              <Link to="/" className="text-lg font-semibold hover:text-gray-300 transition">
                Login
              </Link>
          </div>
        }

      </div>
    </nav>
  );
};

export default Navbar;
