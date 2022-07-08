import React from 'react'
import { Link } from 'react-router-dom';
import { SectionTitle, Section, SectionText, SectionDivider} from './HeaderStyles';

export default function Header() {
  return (
    <div>
        <Section>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            <SectionTitle main color>Zamir Cohen</SectionTitle>
            <SectionText>Hello</SectionText>
            <SectionDivider></SectionDivider>
        </Section>
    </div>
  )
}
