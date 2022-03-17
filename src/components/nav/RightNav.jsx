import React from 'react'
import styledComponents from 'styled-components'

const Ul = styledComponents.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-widht: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
    }

    li {
        color: #fff;
    }
`;

const RightNav = () => {
  return (
    <Ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Sing in</li>
        <li>Sing up</li>
    </Ul>
  )
}

export default RightNav;