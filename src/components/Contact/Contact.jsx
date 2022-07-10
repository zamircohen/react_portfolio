import React from 'react'
import { SectionTitle, Section, SectionText, Wrapper} from '../Header/HeaderStyles';
import { Form } from './ContactStyles';


export default function Contact() {
  return (
    <Wrapper id="contact">
        <Section>    
            <SectionTitle main>Contact me.</SectionTitle>     
            <Form>
                
                <input type="text" placeholder='Your name*' required="true"/>
                
                <input type="text" placeholder='Your comnpany'/>
                
                <input type="text" placeholder='Your email*' />
                
                <input type="tel" placeholder='Phonenumber' />
                
                <textarea placeholder='Your message'></textarea>
                <br />
                <button> SUBMIT </button>
            </Form>
        </Section>
    </Wrapper>
  )
}
