import React from 'react'
import { Wrapper, Div1, Div2, Div3, NavLink, SocialIcons  } from './NavBarStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import ToggleSwitch from '../../styles/GlobalComponents/ToggleSwitch';
import { HashLink } from 'react-router-hash-link';
import {SectionDivider} from '../Header/HeaderStyles';



export default function NavBar() {
    return (
    <Wrapper>
        <Div1>
        <span> <BsMoonFill color="white" size="1.5rem"/> <ToggleSwitch /> <BsSunFill color="white" size="1.5rem"/> </span>
        </Div1>

        <Div2>
            <li>
                <HashLink smooth to="/#home">
                    <NavLink> Home </NavLink>
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="/#about">
                    <NavLink> About </NavLink>
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="/#projects">
                    <NavLink> Projects </NavLink>
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="/#tech">
                    <NavLink> Tech </NavLink>
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="/#contact">
                    <NavLink> Contact </NavLink>
                </HashLink>
            </li>
        </Div2>

        <Div3>
            <SocialIcons href="https://github.com/zamircohen" target="_blank">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            
            <SocialIcons href="https://www.linkedin.com/in/zamircohen/" target="_blank">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            
            <SocialIcons href="https://www.facebook.com/zamircohen/" target="_blank">
                <AiFillFacebook size="3rem"/>
            </SocialIcons>
        </Div3>
    </Wrapper>
    )
}