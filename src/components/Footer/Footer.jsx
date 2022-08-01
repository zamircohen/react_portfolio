import React from 'react'
import { Wrapper } from '../Footer/FooterStyles'
import { SocialIcons } from '../NavBar/NavBarStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <Wrapper>
      <p>
        <SocialIcons href="https://github.com/zamircohen" target="_blank">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            
            <SocialIcons href="https://www.linkedin.com/in/zamircohen/" target="_blank">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            
            <SocialIcons href="https://www.facebook.com/zamircohen/" target="_blank">
                <AiFillFacebook size="3rem"/>
            </SocialIcons>
      </p>

      <p className="p-left">
        © 2022 Zamir Cohen
      </p>
    </Wrapper>
  )
}
