import React from 'react'
// import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Block, BlockTitle, BlockText, Wrapper } from '../Header/HeaderStyles';
import { HashLink } from 'react-router-hash-link';
import { Fade } from "react-awesome-reveal";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Chrono } from "react-chrono";


const items = [
  {
  title: "May 1940",
  cardTitle: "Dunkirk",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "June 1977",
    cardTitle: "Birth of Zamir",
    cardSubtitle:"I was born on April 22nd 1977",
    cardDetailedText: "It was a long time ago, but I was born on April 22nd 1977.",
  },
  {
    title: "May 1940",
    cardTitle: "Summer of War",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
];




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
            <div style={{ width: "100%", height: "600px", hideControls: "true", }}>
              <Chrono 
                items={items} 
                hideControls={true} 
                slideShow={false}
                onRestartSlideshow={true}
                slideShowRunning={true}
                scrollable={{ scrollbar: true }}
                theme={{
                  primary: 'lightblue',
                  secondary: 'transparent',
                  secondaryText: 'white',
                  cardBgColor: 'white',
                  cardForeColor: 'black',
                  titleColor: 'black',
                }}
              />
            </div>
            </BlockText>
        </Block>


    </Wrapper>
  )
}
