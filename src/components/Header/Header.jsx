import React from 'react'
import { Link } from 'react-router-dom';
import { Container, NavLink, Div1, Div2, Div3  } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            {/* <Link href="/"> */}
                {/* <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
                    <img src="/static/logo.png" alt="logo" style={{ width: "100px", height: "100px"}} /> */}
                    <Span> Portfolio </Span>
                {/* </a> */}
        </Div1>

        <Div2>
            <li>
                <Link href="#home">
                    <NavLink> Home </NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink> About </NavLink>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <NavLink> Projects </NavLink>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <NavLink> Contact </NavLink>
                </Link>
            </li>
        </Div2>

        <Div3>
            <li>
                <Link href="https://github.com/zamircohen" target="blank">
                    <NavLink> Github </NavLink>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/zamircohen/" target="blank">
                    <NavLink> LinkedIn </NavLink>
                </Link>
            </li>
        </Div3>

    </Container>
);

export default Header;