import React from 'react'
import { Link } from 'react-router-dom';
import { SectionTitle, Section, SectionText, SectionDivider, Wrapper} from './HeaderStyles';

export default function Header() {
  return (
    <div>
        <Wrapper>
        <Section>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            <SectionTitle main color>Zamir Cohen</SectionTitle>
            <SectionText>Hello</SectionText>
            <SectionDivider></SectionDivider>
        </Section>
        </Wrapper>

        <Wrapper right>
        <Section>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            <SectionTitle main color>Zamir Cohen</SectionTitle>
            <SectionText>Hello</SectionText>
            <SectionDivider></SectionDivider>
        </Section>
        </Wrapper>
    </div>
  )
}
