import React from 'react'
// import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Block, BlockTitle, BlockText, Wrapper } from '../Header/HeaderStyles';
import { HashLink } from 'react-router-hash-link';
import { Fade } from "react-awesome-reveal";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



export default function About() {
  return (
    <Wrapper id="about">
        <Block>    
            <BlockTitle main>About me</BlockTitle>     
            <BlockText>I´m a Social and curious team player with a huge interest in new experiences and personal development. I have a versatile background with experience in areas such as the technology, service- and travel industry. <br /><br />
             I´m in the process of expanding my skills and currently studying Full Stack Web Development at Nackademin, Stockholm, which is a 2-year higher vocational education.<br /><br />
             I´m looking forward to a career in web development. Please contact me <HashLink smooth to="/#contact" style={{ color: 'white' }} activeStyle={{ color: 'blue' }}>here</HashLink> for further inquieries.
            </BlockText>
        </Block>

        <Block>
            <BlockTitle main>Education</BlockTitle>
            <BlockText>
              
            </BlockText>
        </Block>


    </Wrapper>
  )
}
