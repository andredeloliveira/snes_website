import React from 'react';
import styled from 'styled-components';
import { secondary, primary } from "./colors"
const NavbarContainer = styled.div`
  height: 80px;
  width: 100vw;
  background-color: ${secondary};
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  padding: 0 20px;
`;

const NavItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
`;

const NavItem = styled.li`
  display: inline;
  margin: 10px;
  text-decoration: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${primary},
`;
const Navbar = () => (
  <NavbarContainer>
    <Logo>Not just programming</Logo>
    <NavItems>
      <NavItem><NavLink href="/blog">blog</NavLink></NavItem>
      <NavItem><NavLink href="/about">about</NavLink></NavItem>
      <NavItem><NavLink href="/github">github</NavLink></NavItem>
    </NavItems>
  </NavbarContainer>
);

export default Navbar;