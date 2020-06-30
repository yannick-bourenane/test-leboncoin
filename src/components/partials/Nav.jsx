import React from "react";
import { Menu } from "react-bulma-components";

const Nav = () => {
  return (
    <Menu>
      <Menu.List title="Main">
        <Menu.List.Item>Liste des messages</Menu.List.Item>
        <Menu.List.Item>Ajouter un message</Menu.List.Item>
      </Menu.List>
    </Menu>
  );
};

export default Nav;
