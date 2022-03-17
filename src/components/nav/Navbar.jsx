import React from 'react'
import styledComponents from 'styled-components';
import RightNav from './RightNav';

const Nav = styledComponents.nav`
    width: 100%;
    height: 55px;
    border-botton: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
    }
`;

const Navbar = () => {
  return (
    <Nav>
        <div className="logo">
            nav bar
        </div>
        <RightNav/>
    </Nav>
  )
}

export default Navbar;