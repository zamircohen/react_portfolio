import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from '../Typewriter';
import { SectionTitle, Section, SectionText, Wrapper} from './HeaderStyles';
import { Fade } from "react-awesome-reveal";


const typeWriter = [
  "Full Stack Developer",
  "Team Player",
  "Junior Web Developer",
  "Traveller & Explorer",
  "Persistent Student",
  "Mountain climber",
  "Social Person",
  "Marathon Finisher",
  "Programmer / Coder",
  "Class Representative",
  "Photographer",
  "Nature Lover",
  "Web Developer",
  "Multilingual person",
];

export default function Header() {

  return (
    <div>
        {/* <SectionDivider id="home"/> */}
        <Wrapper id="home">
        <Fade delay={300} direction="left">
        <Section left>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            <SectionTitle color>I am a <span>&lt;<TypeWriter data={typeWriter} /></span>&gt;</SectionTitle>
            <br />
            <SectionText>A Junior Full Stack Web Developer open for work</SectionText>
        </Section>
        </Fade>

        <Fade delay={300} direction="right">
        <Section right>
          <img src={process.env.PUBLIC_URL + "/images/zamir1_crop.png"} alt="zamir cohen portrait" height="700px"></img>
        </Section>
        </Fade>
        </Wrapper>
    </div>
  )
}
