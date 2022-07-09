import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from '../Typewriter';
import { SectionTitle, Section, SectionText, Wrapper, SectionDivider} from './HeaderStyles';
import { Fade } from "react-awesome-reveal";

// const loopArr = [
//   "Full Stack Web Developer",
//   "Traveller",
//   "Adventurer",
//   "Husband",
//   "Programmer"
// ];

const typeWriter = [
  "Full Stack Developer",
  "Traveller",
  "Climbe",
  "Husband",
  "Junior Web Developer",
  "Friend",
  "Climber",
  "Runner",
  "Programmer"
];

export default function Header() {

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalDelayMilliseconds = loopArr[index].length * 1000;
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       // reset index if current index is greater than array size
  //       return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
  //     });
  //   }, intervalDelayMilliseconds);

  //   return () => clearInterval(interval);
  // });



  return (
    <div>
        <SectionDivider />
        <Wrapper>
        <Fade delay={500} direction="left">
        <Section left>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            <SectionTitle color>I am a <span>&lt;<TypeWriter data={typeWriter} /></span>&gt;</SectionTitle>
            <br />
            <SectionText>A Junior Full Stack Web Developer open for work</SectionText>
        </Section>
        </Fade>

        <Fade delay={500} direction="right">
        <Section right>
          <img src={process.env.PUBLIC_URL + "/images/zamir1_crop.png"} alt="zamir cohen portrait" height="700px"></img>
        </Section>
        </Fade>
        </Wrapper>
    </div>
  )
}
