import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars,FaSearch } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
export default function Navbar() {
  const [top, setTop] = useState("top");
  const menu=document.getElementById("menu");
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <h3>Tv<span>Seans</span></h3>
        </div>
        <Link to="/search">
        <FaSearch className='search'></FaSearch>
        </Link>
      </div>
      <div className='theme' id='menu'>
          <ul>
            <Link to="/butun" className='menu'> <li>Bütün</li></Link>
            <Link to="/trend" className='menu'> <li>Komediya</li></Link>
            <Link to="/qorxu" className='menu'> <li>Qorxu</li></Link>
            <Link to="/macera" className='menu'> <li>Macəra</li></Link>
            <Link to="/tarixi" className='menu'> <li>Tarixi</li></Link>
            <Link to="/anime" className='menu'> <li>Animasiya</li></Link>
            <Link to="/fantasy" className='menu'> <li>Fantastik</li></Link>
          </ul>
        </div>
    </div>
  );
}
