import React from 'react'
import { SectionTitle, Section, SectionText, Wrapper} from '../About/AboutStyles';
import { Fade } from "react-awesome-reveal";


export default function About() {
  return (
    <Wrapper id="about">
        <Section right>    
            <SectionTitle main>About me</SectionTitle>     
            <SectionText left>Social and curious team player with an interest in new experiences and personal development. A versatile background with experience in areas such as the technology, service and travel industry. In the process of expanding my skills with knowledge in programming and looking forward to a career in web development.</SectionText>
        </Section>

    </Wrapper>
  )
}
