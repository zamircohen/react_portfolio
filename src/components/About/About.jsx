import React from 'react'
import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Block, BlockTitle, BlockText } from '../Header/HeaderStyles';
import { Fade } from "react-awesome-reveal";
import { Chrono } from 'react-chrono';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const items = [{
  title: "August 2021",
  cardTitle: "Frontend 1 - JavaScript",
}, {
  title: "October 2021",
  cardTitle: "Frontend 2 - JavaScript",
}, {
  title: "December 2021",
  cardTitle: "Frontend 3 - React",
}
]


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
                <Chrono
                    mode="HORIZONTAL"
                    items={items}
                    
                    slideShow={true}
                    showLabels={true}
                    hideControls={true}
                    showProgress={true}
                    theme={{
                      primary: 'white',
                      secondary: 'transparent',
                      cardBgColor: 'white',
                      cardForeColor: 'white',
                      titleColor: 'black',
                      titleColorActive: 'white',
                    }}
                />
            </BlockText>
        </Block>


    </Wrapper>
  )
}
