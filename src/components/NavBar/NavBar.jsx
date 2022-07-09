import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper, NavLink, Div1, Div2, Div3, Span, SocialIcons  } from './NavBarStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


export default function Header() {
    return (

    <Wrapper>
        <Div1>
            {/* <Link to="/">
                <a style={{ textDecoration: "none", display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
                    <Span> Portfolio </Span>
                </a>
            </Link> */}
        </Div1>

        <Div2>
            <li>
                <Link style={{textDecoration: 'none'}} to="#home">
                    <NavLink> Home </NavLink>
                </Link>
            </li>
            <li>
                <Link smooth to={{pathname: "/", hash:"about"}} style={{textDecoration: 'none'}}>
                    <NavLink> About </NavLink>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration: 'none'}} to="#projects">
                    <NavLink> Projects </NavLink>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration: 'none'}} to="#tech">
                    <NavLink> Tech </NavLink>
                </Link>
            </li>
            <li>
                <Link style={{textDecoration: 'none'}} to="#contact">
                    <NavLink> Contact </NavLink>
                </Link>
            </li>
        </Div2>

        <Div3>
            <SocialIcons style={{textDecoration: 'none'}} to="https://github.com/zamircohen" target="_blank">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            
            <SocialIcons style={{textDecoration: 'none'}} to="https://www.linkedin.com/in/zamircohen/" target="_blank">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            
            <SocialIcons style={{textDecoration: 'none'}} to="https://www.linkedin.com/in/zamircohen/" target="_blank">
                <AiFillFacebook size="3rem"/>
            </SocialIcons>
        </Div3>

    </Wrapper>

    )
}