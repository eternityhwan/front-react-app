import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import '../css/BootStrapNavbar.css'
import { BsChevronDown, } from "react-icons/bs";
import instaLogo from '../img/instagram-script.png'
import { FiHeart, FiCompass, FiPlusSquare, FiSend} from "react-icons/fi";
import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi";


function NavBar() {

    const [search, setSearch] = useState('검색')

  return (
    <div className='navfix' >
        
        <Navbar bg="light" variant="light">
        <Container>
            {/* <img src={process.env.PUBLIC_URL + 'instagram-script.png'}></img> */}
        <Nav.Link href="/"><img src={instaLogo} style={{width: "100px", height : "40px", backgroundColor:"#efefef"}}></img></Nav.Link>
          <button className='button'><BsChevronDown/></button>
            <div className='input' role="button" tabindex="0"> 
            <span className='button2'><GrSearch/></span>
            <input className='searchbar'
             type="search" 
             placeholder="검색" value={search.target}
            >
          </input>
          </div>
          <Nav className="me-auto">
            <Nav.Link href="#home"> <GrHomeRounded size="20px"/></Nav.Link>
            <Nav.Link href="#features"><FiSend size="20px"/></Nav.Link>
            <Nav.Link href="#pricing"><FiPlusSquare size="20px"/></Nav.Link>
            <Nav.Link href="#pricing"><FiCompass size="20px"/></Nav.Link>
            <Nav.Link href="#pricing"><FiHeart size="20px"/></Nav.Link>
            <Nav.Link href="/login"><HiOutlineUserCircle size="20px"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

    
  )
}

export default NavBar;
