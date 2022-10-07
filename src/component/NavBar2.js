import React from 'react'
import '../css/Navbar2.css'
import { BsChevronDown, BsPlusSquare } from "react-icons/bs";
import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";


function NavBar2() {
  return (
    <nav className="navbar">
      <div className='box-left' >
        <a href='https://www.instagram.com/carlkim9012/'><img
          src="./instagram-script.png"
          style={{
            width : "105px", 
            height : "50px",
            position : "relative",
            marginleft : "5px",
            }}
          alt="insta"
        /></a>
        <button className='downArrow '><BsChevronDown/></button>
        {/* <button className='downArrow' type='button'></button> */}
      </div>
    <div>
      
    </div>
    <div className='box-center'>
      <div className='inputDiv'>
        <span className='inputIcon'><GrSearch size="18px" color = "gray" fill = "rgb(142, 142, 142)"/></span>
        
        <input className="input" type="text" placeholder='검색' ></input>
      </div>
    </div>
    <div className='box-right' >
      <button className='button2'><GrHomeRounded size="25"/></button>
      <button className='button2'><FiSend size="25"/></button>
      <button className='button2'><BsPlusSquare size="25"/></button>
      <button className='button2'><ImCompass2 size="25"/></button>
      <button className='button2'><AiOutlineHeart size="30"/></button>
      <button className='button2'>
        <img src="./unknown.jpg"
        style={{ width : "30px", height : "30px"}}
        alt="insta"></img> 
        </button>
     
    </div>
  </nav>
    );
}
export default NavBar2;
