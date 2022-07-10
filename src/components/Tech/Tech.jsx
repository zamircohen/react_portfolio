import React from 'react'
import { SectionTitle, Section, BlockTitle, Block, SectionText, Wrapper} from '../Header/HeaderStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  { title: 'First item', description: 'Lorem ipsum'},
  { title: 'Second item', description: 'Lorem ipsum'}
];

export default function Tech() {
  return (
    <Wrapper id="tech">
        <Block>    
            <BlockTitle main>Tech</BlockTitle>     
            <Slider >
            {slides.map((slide, index) => <div key={index}>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>)}
          </Slider>
        </Block>
    </Wrapper>
  )
}
