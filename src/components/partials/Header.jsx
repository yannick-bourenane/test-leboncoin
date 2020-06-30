import React from "react";
import { Section } from "react-bulma-components";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <Section>
      <Logo />
      <Nav />
    </Section>
  );
};

export default Header;
