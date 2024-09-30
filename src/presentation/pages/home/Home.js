import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="drawer_componet">
        <img
          className="drawer_componet_logo"
          src="./assets/logo.png"
          alt="Logo"
        />
        <hr />
        <ul className="drawer_componet_sections">
          <li className="drawer_componet_sections_item">
            <NavLink className={({isActive}) => {return isActive ? 'activeLink' : 'inActiveLink'}} to="home">HOME</NavLink> 
          </li>
          <li className="drawer_componet_sections_item">
            <NavLink className={({isActive}) => {return isActive ? 'activeLink' : 'inActiveLink'}} to="about-us">ABOUT US</NavLink>
          </li>
          <li className="drawer_componet_sections_item">
            <NavLink className={({isActive}) => {return isActive ? 'activeLink' : 'inActiveLink'}} to="menu">MENU</NavLink>
          </li>
          <li className="drawer_componet_sections_item">
            <NavLink className={({isActive}) => {return isActive ? 'activeLink' : 'inActiveLink'}} to="contact-us">CONTACT US</NavLink>
          </li>
        </ul>

        <hr />
        <p className="copy_rights">
          Copyright © 2022 The Rameshwaram Cafe.
          <br />
          All Rights Reserved
        </p>
      </div>
      <div className="content_section">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
