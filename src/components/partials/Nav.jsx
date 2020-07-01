import React, { useState } from "react";
import { Navbar, Button } from "react-bulma-components/";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          <NavLink to="/" exact>
            <Logo />
          </NavLink>
        </Navbar.Item>
        <Navbar.Burger
          className={menuActive ? "is-active" : ""}
          onClick={() => setMenuActive(!menuActive)}
        />
        <Navbar.Menu className={menuActive ? "is-active" : ""}>
          <Navbar.Container>
            <Navbar.Item renderAs={"div"}>
              <NavLink to="/" exact>
                <Button>Liste des messages</Button>
              </NavLink>
            </Navbar.Item>
            <Navbar.Item renderAs={"div"}>
              <NavLink to="/new-message">
                <Button>
                  <svg
                    data-name="Calque 1"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                  >
                    <path d="M17.33 10.67h-4v-4a1.33 1.33 0 10-2.66 0v4h-4a1.33 1.33 0 100 2.66h4v4a1.33 1.33 0 102.66 0v-4h4a1.33 1.33 0 100-2.66z"></path>
                    <path d="M21.6 0H2.4A2.41 2.41 0 000 2.4v19.2A2.41 2.41 0 002.4 24h19.2a2.41 2.41 0 002.4-2.4V2.4A2.41 2.41 0 0021.6 0zm0 20.4a1.2 1.2 0 01-1.2 1.2H3.6a1.2 1.2 0 01-1.2-1.2V3.6a1.2 1.2 0 011.2-1.2h16.8a1.2 1.2 0 011.2 1.2v16.8z"></path>
                  </svg>
                  Ajouter un message
                </Button>
              </NavLink>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
