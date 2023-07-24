import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGraduationCap } from 'react-icons/fa';


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }

    const navItem = <>
    <li className=' text-1xl font-bold'><Link to='/'>Home </Link></li>
    <li className=' text-1xl font-bold'><Link to='/allcollege'>Colleges</Link></li>
    <li className=' text-1xl font-bold'><Link to='/admission'>Admission</Link></li>
    
    {
      user ? <>
      <li className=' text-1xl font-bold'><Link to='/mycollege'>My College</Link></li>
      <li className=' text-1xl font-bold'><Link to='/profile'>Profile</Link></li>
    <button onClick={handleLogOut} className="btn btn-active btn-ghost">logout</button>
       </>:
       <><li className=' text-1xl font-bold'><Link to='/login'>Login</Link></li>
       </>
    }
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-2xl font-bold">
       {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl uppercase"> <span className='text-blue-500'><FaGraduationCap/></span><span className='text-blue-500'>Admission</span> <span className='text-blue-950'>Hub</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase">
    {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">start</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;