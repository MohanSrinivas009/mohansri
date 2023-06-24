import React from 'react'
import { NavLink } from "react-router-dom";
import  {navHome as Home} from './navHome';
import { navAboutUs as Aboutus } from './navAboutUs';
import {navContacts as Contacts} from './navContacts';
import { navProjects as Projects } from './navProjects';
import { navHire as Hire } from './navHire';
export function navbar() {
  return (
    <div className="navBar">
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
          <NavLink to="ContactsPage">
            <Contacts />
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
  );
}

