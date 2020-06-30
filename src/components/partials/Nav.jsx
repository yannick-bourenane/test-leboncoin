import React, { useState } from "react";
import { Navbar } from "react-bulma-components/";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          <Logo />
        </Navbar.Item>
        <Navbar.Burger
          className={menuActive ? "is-active" : ""}
          onClick={() => setMenuActive(!menuActive)}
        />
        <Navbar.Menu className={menuActive ? "is-active" : ""}>
          <Navbar.Container>
            <Navbar.Item renderAs={"div"}>
              <NavLink to="/">Liste des messages</NavLink>
            </Navbar.Item>
            <Navbar.Item renderAs={"div"}>
              <NavLink to="/new-message">Ajouter un message</NavLink>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
