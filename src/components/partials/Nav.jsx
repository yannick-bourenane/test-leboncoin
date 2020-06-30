import React from "react";
import { Navbar } from "react-bulma-components/";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          <Logo />
        </Navbar.Item>
        <Navbar.Item>
          <NavLink to="/">Liste des messages</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <NavLink to="/new-message">Ajouter un message</NavLink>
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
