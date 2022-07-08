import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper, NavLink, Div1, Div2, Div3, Span  } from './HeaderStyles';

const Header = () => (
    <Wrapper>
        <Div1>
            <Link href="/">
                    <Span> Portfolio </Span>
            </Link>
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

    </Wrapper>
);

export default Header;