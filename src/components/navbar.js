import React from 'react'
import {useState,useRef} from 'react'
import { NavLink } from "react-router-dom";
import  {navHome as Home} from './navHome';
import { navAboutUs as Aboutus } from './navAboutUs';
import {navContacts as Contacts} from './navContacts';
import { navProjects as Projects } from './navProjects';
import { navHire as Hire } from './navHire';
export function Navbar() {
  const [open,setOpen]=useState('material-symbols-outlined')
  const[close,setClose]=useState('close')
  const [windowWidth,setWidth] = useState(window.innerWidth);
  const [style,setStyle]=useState('RWDnav')
  const Open=()=>{
    setOpen('open')
    setStyle('navBar')
    setClose("material-symbols-outlined");
  }
  const Close=()=>{
      setClose("Close");
      setStyle(" RWDnav");
      setOpen("material-symbols-outlined");
  }
  return (
    <>
      <div className="menu">
        <span className={open} onClick={Open}>Menu</span>
        <span className={close} onClick={Close}>Close
        </span>
      </div>
      <div className={style}>
        <ul>
          <li>
            <NavLink to="/">
              <Home />
            </NavLink>
          </li>
          <li>
            <NavLink to="AboutPage">
              <Aboutus />
            </NavLink>
          </li>
          <li>
            <NavLink to="ProjectsPage">
              <Projects />
            </NavLink>
          </li>
          <li>
            <NavLink to="HirePage">
              <Hire />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

