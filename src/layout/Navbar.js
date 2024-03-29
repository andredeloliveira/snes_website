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
  display: flex;
  align-items: center;
`;

// const Kirby = styled.i`
//   margin: 24px;
// `;

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
  font-size: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${primary},
  font-size: 10px;
`;

const Name = styled.span`
  font-size: 10px;
`

const Navbar = () => {
  const isAuthenticated = sessionStorage.getItem("token");
  return (
    <NavbarContainer>
      <Logo>
        <Name>Ordinary -> function(x)</Name>
      </Logo>
      <NavItems>
        <NavItem><NavLink href="/">blog</NavLink></NavItem>
        <NavItem><NavLink href="/about">about</NavLink></NavItem>
        {isAuthenticated ? <NavItem><NavLink href="/publish">create post</NavLink></NavItem> : ''}
      </NavItems>
    </NavbarContainer>
  );
}

export default Navbar;