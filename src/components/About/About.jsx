import React from 'react'
// import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Block, BlockTitle, BlockText, Wrapper } from '../Header/HeaderStyles';
import { HashLink } from 'react-router-hash-link';
import { Fade } from "react-awesome-reveal";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Chrono } from "react-chrono";


const items = [
  {
    title: "2022 Q1-2",
    cardTitle: "Backend Development",
    cardSubtitle:"Node.js, MongoDB, Docker, Databases and more",
    cardDetailedText: ["Studied the basics of backend development and learned how to use the Node.js framework to create a server. I´ve also been working with the Express framework and the MongoDB database."]
  },
  {
    title: "2021 Q3-4",
    cardTitle: "Frontend Development",
    cardDetailedText: "Studied the basich of frontend development and learned how to use the React framework to create a website. I´ve also been working with the Bootstrap framework and learning HTML and CSS.",
    },
  {
    title: "June 1977",
    cardTitle: "Birth of Zamir",
    cardDetailedText: ["paragraph1", "paragraph2"]
  },
];


export default function About() {
  return (
    <Wrapper id="about">
        <Block>    
            <BlockTitle main>About me</BlockTitle>     
            <BlockText>I am a Social and curious team player with a huge interest in new experiences and personal development. I have a versatile background with experience in areas such as the technology, service- and travel industry. <br /><br />
             I am in the process of expanding my skills and currently studying Full Stack Web Development at Nackademin, Stockholm, which is a 2-year higher vocational education.<br /><br />
             I am looking forward to a career in web development. Please contact me <HashLink smooth to="/#contact" style={{ color: 'white' }} activeStyle={{ color: 'blue' }}>here</HashLink> for further inquieries.
            </BlockText>
        </Block>
        <Block>
            <BlockTitle main>My CV</BlockTitle>
            {/* <BlockText> */}
            <div style={{ width: "100%", height: "600px", hideControls: "true", }}>
          
              <Chrono 
                items={items} 
                mode="VERTICAL"
                hideControls={true} 
                scrollable={{ scrollbar: true }}
                theme={{
                  primary: 'white',
                  secondary: 'transparent',
                  cardBgColor: 'white',
                  cardForeColor: 'black',
                  cardTitleColor: 'black',
                  cardSubtitleColor: 'black',
                  titleColor: 'black',
                  titleColorActive: 'white'
                }}
                fontSizes={{
                  cardSubtitle: '2rem',
                  cardText: '2rem',
                  cardTitle: '3rem',
                  // title: '2rem',
                }}
              >
              </Chrono>

            </div>
            {/* </BlockText> */}
        </Block>

    </Wrapper>
  )
}
