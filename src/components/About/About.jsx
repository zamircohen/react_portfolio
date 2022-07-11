import React from 'react'
// import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Block, BlockTitle, BlockText, Wrapper } from '../Header/HeaderStyles';
import { Fade } from "react-awesome-reveal";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



export default function About() {
  return (
    <Wrapper id="about">
        <Block>    
            <BlockTitle main>About me</BlockTitle>     
            <BlockText>Social and curious team player with an interest in new experiences and personal development. A versatile background with experience in areas such as the technology, service and travel industry. In the process of expanding my skills with knowledge in programming and looking forward to a career in web development.</BlockText>
        </Block>

        <Block>
            <BlockTitle main>Education</BlockTitle>
            <BlockText>
              
            </BlockText>
        </Block>


    </Wrapper>
  )
}
