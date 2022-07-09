import React from 'react'
import { Link } from 'react-router-dom';
import { SectionTitle, Section, SectionText, Wrapper} from './HeaderStyles';

export default function Header() {
  return (
    <div>
        <Wrapper>
        <Section>
            <SectionTitle main>Welcome to <br /> Zamir Cohen´s <br /> React portfolio</SectionTitle>
            {/* <SectionTitle main color>Zamir Cohen</SectionTitle> */}
            {/* <SectionText>Hello</SectionText> */}
        </Section>
        </Wrapper>

        <Wrapper right>
        <Section>
          <img src={process.env.PUBLIC_URL + "/images/zamir1_crop.png"} alt="zamir cohen portrait" height="700px"></img>
        </Section>
        </Wrapper>
    </div>
  )
}
