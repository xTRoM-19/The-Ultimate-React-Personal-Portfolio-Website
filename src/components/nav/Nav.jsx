import React from 'react';
import './nav.css' 
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#home"><GoHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><GoHome/></a>
        <a href="#contact"><GoHome/></a>
      </nav>
    </div>
  )
}


export default Nav
